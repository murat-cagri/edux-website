import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public")
    const filesDir = path.join(publicDir, "files")

    // Create the directory if it doesn't exist
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir, { recursive: true })
    }

    const files = fs.readdirSync(filesDir)

    // Filter for PDF files only
    const pdfFiles = files.filter((file) => file.toLowerCase().endsWith(".pdf"))

    // Get file details
    const fileDetails = pdfFiles.map((file) => {
      const filePath = path.join(filesDir, file)
      const stats = fs.statSync(filePath)

      return {
        name: file,
        size: formatFileSize(stats.size),
        lastModified: formatDate(stats.mtime),
        path: `/files/${file}`,
      }
    })

    return NextResponse.json({ files: fileDetails })
  } catch (error) {
    console.error("Error reading PDF files:", error)
    return NextResponse.json({ error: "Failed to read PDF files" }, { status: 500 })
  }
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

// Helper function to format date
function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
