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

    // Get file details for all files
    const fileDetails = files.map((file) => {
      const filePath = path.join(filesDir, file)
      const stats = fs.statSync(filePath)
      const extension = path.extname(file).slice(1).toLowerCase()

      // Determine file type based on name or extension
      let type
      if (file.toLowerCase().includes("logbook") || file.toLowerCase().includes("log-book")) {
        type = "logbook"
      } else if (file.toLowerCase().includes("presentation") || ["ppt", "pptx", "key", "odp"].includes(extension)) {
        type = "presentation"
      } else {
        type = "report"
      }

      return {
        name: file,
        size: formatFileSize(stats.size),
        lastModified: formatDate(stats.mtime),
        path: `/files/${file}`,
        extension: extension,
        type: type,
      }
    })

    return NextResponse.json({ files: fileDetails })
  } catch (error) {
    console.error("Error reading files:", error)
    return NextResponse.json({ error: "Failed to read files" }, { status: 500 })
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
