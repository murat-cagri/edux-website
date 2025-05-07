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
import { Download, FileText, ArrowLeft, BookOpen, PresentationIcon } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ReportsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [files, setFiles] = useState<any[]>([])
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

    // Fetch files from the files directory
    fetchFiles()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/files")
      const data = await response.json()
      setFiles(data.files)
    } catch (error) {
      console.error("Error fetching files:", error)
      // Fallback to the original PDF files endpoint if the new one fails
      try {
        const pdfResponse = await fetch("/api/pdf-files")
        if (pdfResponse.ok) {
          const pdfData = await pdfResponse.json()
          setFiles(pdfData.files)
        }
      } catch (pdfError) {
        console.error("Error fetching PDF files:", pdfError)
      }
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

  // Function to get a color based on file name and type
  const getColorForFile = (fileName: string, fileType: string) => {
    const colorSets = {
      report: ["from-purple-400 to-purple-600", "from-blue-400 to-blue-600", "from-indigo-400 to-indigo-600"],
      logbook: ["from-green-400 to-green-600", "from-teal-400 to-teal-600", "from-emerald-400 to-emerald-600"],
      presentation: ["from-amber-400 to-amber-600", "from-orange-400 to-orange-600", "from-red-400 to-red-600"],
    }

    const colors = colorSets[fileType as keyof typeof colorSets] || colorSets.report

    // Simple hash function to get consistent color for the same file name
    let hash = 0
    for (let i = 0; i < fileName.length; i++) {
      hash = fileName.charCodeAt(i) + ((hash << 5) - hash)
    }

    const index = Math.abs(hash) % colors.length
    return colors[index]
  }

  // Function to determine file type based on file extension or metadata
  const getFileType = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()

    if (fileName.toLowerCase().includes("logbook") || fileName.toLowerCase().includes("log-book")) {
      return "logbook"
    } else if (
      fileName.toLowerCase().includes("presentation") ||
      ["ppt", "pptx", "key", "odp"].includes(extension || "")
    ) {
      return "presentation"
    } else {
      return "report"
    }
  }

  // Function to get appropriate icon based on file type
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "logbook":
        return <BookOpen size={48} className="text-white" />
      case "presentation":
        return <PresentationIcon size={48} className="text-white" />
      default:
        return <FileText size={48} className="text-white" />
    }
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
        className={`transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-md" : ""
        }`}
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
              label="Resources"
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
              tooltip="Resources"
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
        className={`bg-white dark:bg-gray-900 shadow-2xl transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
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
              Edux Resource Library
            </Heading>
            <Text align="center" marginBottom="24" className="max-w-3xl text-gray-600 dark:text-gray-300">
              Access our collection of educational reports, logbooks, presentations, and learning resources. Download
              and use these materials to enhance your learning journey.
            </Text>
          </Column>
        </Column>

        {/* Files sections */}
        <Column fillWidth paddingX="32" paddingBottom="64" gap="32" className="z-10 items-center mt-8">
          {loading ? (
            <Column horizontal="center" vertical="center" paddingY="64" gap="16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              <Text align="center" className="text-gray-500 dark:text-gray-400">
                Loading resources...
              </Text>
            </Column>
          ) : files.length > 0 ? (
            <>
              {/* Reports Section */}
              {files.filter((file) => (file.type || getFileType(file.name)) === "report").length > 0 && (
                <Column fillWidth gap="16" className="max-w-4xl mx-auto">
                  <Row horizontal="space-between" vertical="center" fillWidth>
                    <Heading as="h2" variant="heading-strong-l" className="text-blue-600 dark:text-blue-400">
                      Reports
                    </Heading>
                    <Text className="text-gray-500 dark:text-gray-400">
                      {files.filter((file) => (file.type || getFileType(file.name)) === "report").length} available
                    </Text>
                  </Row>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full">
                    {files
                      .filter((file) => (file.type || getFileType(file.name)) === "report")
                      .map((file, index) => {
                        const fileType = file.type || getFileType(file.name)
                        return (
                          <Card
                            key={index}
                            fillWidth
                            background="surface"
                            border="neutral-alpha-weak"
                            radius="xl"
                            className="group transform transition-all duration-300 hover:scale-102 hover:shadow-xl overflow-hidden"
                          >
                            <div
                              className={`h-32 bg-gradient-to-r ${getColorForFile(
                                file.name,
                                fileType,
                              )} flex items-center justify-center`}
                            >
                              {getFileIcon(fileType)}
                            </div>
                            <Column padding="24" gap="16">
                              <Column gap="8">
                                <div className="flex justify-between items-start">
                                  <Heading as="h3" variant="heading-default-m" className="line-clamp-1">
                                    {file.name.replace(/\.(pdf|docx?|pptx?|xlsx?)$/i, "")}
                                  </Heading>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    Report
                                  </span>
                                  <Text size="s" className="text-gray-500 dark:text-gray-400">
                                    {file.extension?.toUpperCase() ||
                                      file.name.split(".").pop()?.toUpperCase() ||
                                      "PDF"}{" "}
                                    • {file.size}
                                  </Text>
                                </div>
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
                        )
                      })}
                  </div>
                </Column>
              )}

              {/* Logbooks Section */}
              {files.filter((file) => (file.type || getFileType(file.name)) === "logbook").length > 0 && (
                <Column fillWidth gap="16" className="max-w-4xl mx-auto mt-12">
                  <Row horizontal="space-between" vertical="center" fillWidth>
                    <Heading as="h2" variant="heading-strong-l" className="text-green-600 dark:text-green-400">
                      Logbooks
                    </Heading>
                    <Text className="text-gray-500 dark:text-gray-400">
                      {files.filter((file) => (file.type || getFileType(file.name)) === "logbook").length} available
                    </Text>
                  </Row>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full">
                    {files
                      .filter((file) => (file.type || getFileType(file.name)) === "logbook")
                      .map((file, index) => {
                        const fileType = file.type || getFileType(file.name)
                        return (
                          <Card
                            key={index}
                            fillWidth
                            background="surface"
                            border="neutral-alpha-weak"
                            radius="xl"
                            className="group transform transition-all duration-300 hover:scale-102 hover:shadow-xl overflow-hidden"
                          >
                            <div
                              className={`h-32 bg-gradient-to-r ${getColorForFile(
                                file.name,
                                fileType,
                              )} flex items-center justify-center`}
                            >
                              {getFileIcon(fileType)}
                            </div>
                            <Column padding="24" gap="16">
                              <Column gap="8">
                                <div className="flex justify-between items-start">
                                  <Heading as="h3" variant="heading-default-m" className="line-clamp-1">
                                    {file.name.replace(/\.(pdf|docx?|pptx?|xlsx?)$/i, "")}
                                  </Heading>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                    Logbook
                                  </span>
                                  <Text size="s" className="text-gray-500 dark:text-gray-400">
                                    {file.extension?.toUpperCase() ||
                                      file.name.split(".").pop()?.toUpperCase() ||
                                      "PDF"}{" "}
                                    • {file.size}
                                  </Text>
                                </div>
                              </Column>
                              <Row horizontal="space-between" vertical="center">
                                <Text size="s" className="text-gray-500 dark:text-gray-400">
                                  Last modified: {file.lastModified}
                                </Text>
                                <Button
                                  variant="tertiary"
                                  size="s"
                                  onClick={() => handleDownload(file.name)}
                                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 dark:from-green-500 dark:to-teal-500 dark:hover:from-green-600 dark:hover:to-teal-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                  <Download size={16} className="mr-2" />
                                  Download
                                </Button>
                              </Row>
                            </Column>
                          </Card>
                        )
                      })}
                  </div>
                </Column>
              )}

              {/* Presentations Section */}
              {files.filter((file) => (file.type || getFileType(file.name)) === "presentation").length > 0 && (
                <Column fillWidth gap="16" className="max-w-4xl mx-auto mt-12">
                  <Row horizontal="space-between" vertical="center" fillWidth>
                    <Heading as="h2" variant="heading-strong-l" className="text-amber-600 dark:text-amber-400">
                      Presentations
                    </Heading>
                    <Text className="text-gray-500 dark:text-gray-400">
                      {files.filter((file) => (file.type || getFileType(file.name)) === "presentation").length}{" "}
                      available
                    </Text>
                  </Row>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full">
                    {files
                      .filter((file) => (file.type || getFileType(file.name)) === "presentation")
                      .map((file, index) => {
                        const fileType = file.type || getFileType(file.name)
                        return (
                          <Card
                            key={index}
                            fillWidth
                            background="surface"
                            border="neutral-alpha-weak"
                            radius="xl"
                            className="group transform transition-all duration-300 hover:scale-102 hover:shadow-xl overflow-hidden"
                          >
                            <div
                              className={`h-32 bg-gradient-to-r ${getColorForFile(
                                file.name,
                                fileType,
                              )} flex items-center justify-center`}
                            >
                              {getFileIcon(fileType)}
                            </div>
                            <Column padding="24" gap="16">
                              <Column gap="8">
                                <div className="flex justify-between items-start">
                                  <Heading as="h3" variant="heading-default-m" className="line-clamp-1">
                                    {file.name.replace(/\.(pdf|docx?|pptx?|xlsx?)$/i, "")}
                                  </Heading>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                    Presentation
                                  </span>
                                  <Text size="s" className="text-gray-500 dark:text-gray-400">
                                    {file.extension?.toUpperCase() ||
                                      file.name.split(".").pop()?.toUpperCase() ||
                                      "PDF"}{" "}
                                    • {file.size}
                                  </Text>
                                </div>
                              </Column>
                              <Row horizontal="space-between" vertical="center">
                                <Text size="s" className="text-gray-500 dark:text-gray-400">
                                  Last modified: {file.lastModified}
                                </Text>
                                <Button
                                  variant="tertiary"
                                  size="s"
                                  onClick={() => handleDownload(file.name)}
                                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 dark:from-amber-500 dark:to-orange-500 dark:hover:from-amber-600 dark:hover:to-orange-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                  <Download size={16} className="mr-2" />
                                  Download
                                </Button>
                              </Row>
                            </Column>
                          </Card>
                        )
                      })}
                  </div>
                </Column>
              )}
            </>
          ) : (
            <Column horizontal="center" vertical="center" paddingY="64" gap="16">
              <Icon name="fileText" size="xl" className="text-gray-400" />
              <Heading as="h3" variant="heading-default-m" align="center">
                No resources found
              </Heading>
              <Text align="center" className="text-gray-500 dark:text-gray-400 max-w-md">
                There are currently no resources available. Check back later for updates.
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
