"use client"

import {
  Heading,
  Text,
  Button,
  Icon,
  Card,
  Column,
  Row,
  Logo,
  Fade,
  IconButton,
  ThemeSwitcher,
  Background,
} from "@/once-ui/components"
import { Download, FileText, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ReportsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [pdfFiles, setPdfFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Fetch PDF files from the files directory
    fetchPdfFiles()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const fetchPdfFiles = async () => {
    try {
      const response = await fetch("/api/pdf-files")
      if (!response.ok) {
        throw new Error("Failed to fetch PDF files")
      }
      const data = await response.json()
      setPdfFiles(data.files)
    } catch (error) {
      console.error("Error fetching PDF files:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (fileName: string) => {
    // Create a link to download the file
    const link = document.createElement("a")
    link.href = `/files/${fileName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to get a color based on file name
  const getColorForFile = (fileName: string) => {
    const colors = [
      "from-purple-400 to-purple-600",
      "from-blue-400 to-blue-600",
      "from-green-400 to-green-600",
      "from-amber-400 to-amber-600",
      "from-red-400 to-red-600",
      "from-indigo-400 to-indigo-600",
      "from-pink-400 to-pink-600",
      "from-teal-400 to-teal-600",
    ]

    // Simple hash function to get consistent color for the same file name
    let hash = 0
    for (let i = 0; i < fileName.length; i++) {
      hash = fileName.charCodeAt(i) + ((hash << 5) - hash)
    }

    const index = Math.abs(hash) % colors.length
    return colors[index]
  }

  return (
    <Column
      fillWidth
      paddingY="80"
      paddingX="s"
      horizontal="center"
      flex={1}
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black min-h-screen"
    >
      {/* Gradient top fade */}
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "2",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />

      {/* Navigation bar */}
      <Row
        position="fixed"
        top="0"
        fillWidth
        horizontal="center"
        zIndex={3}
        className={`transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-md" : ""}`}
      >
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
          fillWidth
        >
          <Logo size="s" icon={false} href="/" className="hover:scale-105 transition-transform duration-300" />
          <Row gap="16" hide="s" className="items-center">
            <Button
              href="/reports"
              size="s"
              label="Reports"
              weight="default"
              variant="tertiary"
              className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors duration-300"
            />
            <Button
              href="/about"
              size="s"
              label="About"
              weight="default"
              variant="tertiary"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            />
            <ThemeSwitcher className="hover:scale-110 transition-transform duration-300" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="/reports"
              icon="fileText"
              variant="tertiary"
              tooltip="Reports"
              className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors duration-300"
            />
            <IconButton
              href="/about"
              icon="info"
              variant="tertiary"
              tooltip="About"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            />
            <ThemeSwitcher className="hover:scale-110 transition-transform duration-300" />
          </Row>
        </Row>
      </Row>

      {/* Main content */}
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
        className={`bg-white dark:bg-gray-900 shadow-2xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Header section */}
        <Column
          fillWidth
          horizontal="center"
          gap="24"
          radius="xl"
          paddingTop="80"
          paddingBottom="40"
          position="relative"
          className="overflow-hidden"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
            className="opacity-60"
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-strong",
              colorEnd: "static-transparent",
            }}
            className="animate-pulse"
          />

          {/* Header content */}
          <Column fillWidth horizontal="center" gap="16" padding="32" position="relative" className="z-10">
            <Link href="/" className="self-center">
              <Button
                variant="tertiary"
                size="s"
                className="mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>

            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
              marginBottom="16"
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
            >
              Edux Reports Library
            </Heading>
            <Text align="center" marginBottom="24" className="max-w-3xl text-gray-600 dark:text-gray-300">
              Access our collection of educational reports, research papers, and learning resources. Download and use
              these materials to enhance your learning journey.
            </Text>
          </Column>
        </Column>

        {/* Reports grid */}
        <Column fillWidth paddingX="32" paddingBottom="64" gap="32" className="z-10 items-center">
          {loading ? (
            <Column horizontal="center" vertical="center" paddingY="64" gap="16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              <Text align="center" className="text-gray-500 dark:text-gray-400">
                Loading reports...
              </Text>
            </Column>
          ) : pdfFiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
              {pdfFiles.map((file, index) => (
                <Card
                  key={index}
                  fillWidth
                  background="surface"
                  border="neutral-alpha-weak"
                  radius="xl"
                  className="group transform transition-all duration-300 hover:scale-102 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`h-32 bg-gradient-to-r ${getColorForFile(file.name)} flex items-center justify-center`}
                  >
                    <FileText size={48} className="text-white" />
                  </div>
                  <Column padding="24" gap="16">
                    <Column gap="8">
                      <div className="flex justify-between items-start">
                        <Heading as="h3" variant="heading-default-m" className="line-clamp-1">
                          {file.name.replace(".pdf", "")}
                        </Heading>
                      </div>
                      <Text size="s" className="text-gray-500 dark:text-gray-400">
                        PDF Document • {file.size}
                      </Text>
                    </Column>
                    <Row horizontal="space-between" vertical="center">
                      <Text size="s" className="text-gray-500 dark:text-gray-400">
                        Last modified: {file.lastModified}
                      </Text>
                      <Button
                        variant="tertiary"
                        size="s"
                        onClick={() => handleDownload(file.name)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </Row>
                  </Column>
                </Card>
              ))}
            </div>
          ) : (
            <Column horizontal="center" vertical="center" paddingY="64" gap="16">
              <Icon name="fileText" size="xl" className="text-gray-400" />
              <Heading as="h3" variant="heading-default-m" align="center">
                No reports available
              </Heading>
              <Text align="center" className="text-gray-500 dark:text-gray-400 max-w-md">
                There are currently no reports in the library. Check back later for updates.
              </Text>
            </Column>
          )}
        </Column>

        {/* Footer */}
        <Row
          fillWidth
          paddingY="32"
          paddingX="32"
          horizontal="center"
          className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <Column gap="8" horizontal="center">
            <Logo size="s" icon={false} href="/" />
            <Text size="s" className="text-gray-500 dark:text-gray-400">
              © 2025 Edux. All rights reserved.
            </Text>
          </Column>
        </Row>
      </Column>
    </Column>
  )
}