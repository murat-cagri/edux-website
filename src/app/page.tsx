"use client"

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Background,
  Card,
  Fade,
  IconButton,
  Column,
  Row,
  ThemeSwitcher,
} from "@/once-ui/components"
import { ScrollToTop } from "@/once-ui/components/ScrollToTop"
import { Upload, Settings, Sparkles, GraduationCap, Brain, Calendar, PenToolIcon as Tool } from 'lucide-react'
import { useState, useEffect } from "react"
import React from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Content",
      description: "Import notes, textbooks, articles, or any learning material",
      color: "bg-purple-100 dark:bg-purple-950/40",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800 group-hover:border-purple-300 dark:group-hover:border-purple-700",
      shadowColor: "group-hover:shadow-purple-200/50 dark:group-hover:shadow-purple-900/30"
    },
    {
      icon: Settings,
      title: "Customize Your Experience",
      description: "Set learning goals, preferences, and deadlines",
      color: "bg-blue-100 dark:bg-blue-950/40",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-700",
      shadowColor: "group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-900/30"
    },
    {
      icon: Sparkles,
      title: "AI Processes Your Material",
      description: "Our AI analyzes and organizes your content optimally",
      color: "bg-green-100 dark:bg-green-950/40",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800 group-hover:border-green-300 dark:group-hover:border-green-700",
      shadowColor: "group-hover:shadow-green-200/50 dark:group-hover:shadow-green-900/30"
    },
    {
      icon: GraduationCap,
      title: "Learn Effectively",
      description: "Use personalized tools and schedules to master your material",
      color: "bg-amber-100 dark:bg-amber-950/40",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800 group-hover:border-amber-300 dark:group-hover:border-amber-700",
      shadowColor: "group-hover:shadow-amber-200/50 dark:group-hover:shadow-amber-900/30"
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Explanations",
      description: "Get detailed explanations on complex topics powered by large language models, making difficult concepts easier to understand in your preferred learning style.",
      color: "text-brand-medium",
      bgColor: "bg-brand-50 dark:bg-brand-950/30",
      borderColor: "border-brand-100 dark:border-brand-900",
      hoverBorderColor: "group-hover:border-brand-300 dark:group-hover:border-brand-700",
      shadowColor: "group-hover:shadow-brand-200/50 dark:group-hover:shadow-brand-900/30"
    },
    {
      icon: Calendar,
      title: "Personalized Study Schedules",
      description: "Tailored study schedules that adapt to your learning pace, preferences, and deadlines, ensuring you stay on track with your goals while maintaining work-life balance.",
      color: "text-accent-medium",
      bgColor: "bg-accent-50 dark:bg-accent-950/30",
      borderColor: "border-accent-100 dark:border-accent-900",
      hoverBorderColor: "group-hover:border-accent-300 dark:group-hover:border-accent-700",
      shadowColor: "group-hover:shadow-accent-200/50 dark:group-hover:shadow-accent-900/30"
    },
    {
      icon: Tool,
      title: "Interactive Learning Tools",
      description: "Generate flashcards, quizzes, mind maps, and skill trees from your uploaded content to boost understanding and retention through active learning techniques.",
      color: "text-success-medium",
      bgColor: "bg-success-50 dark:bg-success-950/30",
      borderColor: "border-success-100 dark:border-success-900",
      hoverBorderColor: "group-hover:border-success-300 dark:group-hover:border-success-700",
      shadowColor: "group-hover:shadow-success-200/50 dark:group-hover:shadow-success-900/30"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Function to scroll to the features section
  const scrollToNext = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1} className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <ScrollToTop>
        <IconButton
          variant="secondary"
          icon="chevronUp"
          className="shadow-lg hover:shadow-xl transition-all duration-300"
        />
      </ScrollToTop>

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
        className={`transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-md' : ''}`}
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
            <Button href="/reports" size="s" label="Reports" weight="default" variant="tertiary" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" />
            <Button href="/about" size="s" label="About" weight="default" variant="tertiary" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" />
            <ThemeSwitcher className="hover:scale-110 transition-transform duration-300" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton href="/reports" icon="fileText" variant="tertiary" tooltip="Reports" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" />
            <IconButton href="/about" icon="info" variant="tertiary" tooltip="About" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" />
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
        className={`bg-white dark:bg-gray-900 shadow-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Hero section */}
        <Column fillWidth horizontal="center" gap="48" radius="xl" paddingTop="80" position="relative" className="overflow-hidden">
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
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-medium",
              colorEnd: "static-transparent",
            }}
            className="animate-pulse"
          />

          {/* Hero content */}
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative" className="z-10">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8" className="animate-bounce-slow bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800">
              Revolutionizing Learning
              <Icon name="sparkles" size="s" marginLeft="8" className="text-yellow-500" />
            </InlineCode>
            <Heading wrap="balance" variant="display-strong-xl" align="center" marginBottom="16" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Edux: Where Learning Meets Innovation
            </Heading>
            <Text align="center" marginBottom="24" className="max-w-3xl text-gray-600 dark:text-gray-300">
              In today&#39;s fast-paced world, learning and staying ahead require more than just access to resources.
              Edux combines AI-powered explanations, personalized study schedules, and interactive tools to make your
              educational journey more efficient, engaging, and effective.
            </Text>
            <Row marginY="32">
              <Button
                id="getStarted"
                label="Get Started"
                onClick={scrollToNext}
                variant="primary"
                arrowIcon
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              />
            </Row>
          </Column>

          {/* Features Section */}
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative" paddingY="16" className="z-10">
            <Heading as="h2" variant="display-default-m" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Features
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak" className="max-w-2xl">
              Powerful tools to enhance your learning experience
            </Text>

            <Row fillWidth gap="24" paddingY="32" mobileDirection="column">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  fillWidth
                  padding="32"
                  gap="16"
                  background="surface"
                  direction="column"
                  border="neutral-alpha-weak"
                  radius="xl"
                  className={`group transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${feature.bgColor} ${feature.borderColor} ${feature.hoverBorderColor} ${feature.shadowColor}`}
                >
                  {React.createElement(feature.icon, {
                    size: 48,
                    className: `${feature.color} mb-2`
                  })}
                  <Heading as="h3" variant="heading-default-m">
                    {feature.title}
                  </Heading>
                  <Text onBackground="neutral-medium">
                    {feature.description}
                  </Text>
                </Card>
              ))}
            </Row>
          </Column>
        </Column>

        {/* How It Works Section */}
        <Column paddingX="32" fillWidth paddingY="128" position="relative" className="bg-gray-50 dark:bg-gray-900/50">
          <Background
            style={{ left: "-1px" }}
            borderTop="neutral-alpha-medium"
            mask={{
              x: 0,
              y: 50,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 100,
              width: "10%",
              color: "neutral-alpha-medium",
              height: "1.25%",
            }}
          />
          <Row fillWidth gap="64" mobileDirection="column">
            <Column fillWidth gap="32">
              <Heading as="h2" variant="display-strong-l" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                How Edux Works
              </Heading>

              <Column gap="24" className="text-justify">
                <Text size="l" onBackground="neutral-medium" className="text-gray-600 dark:text-gray-300 text-justify">
                  While the internet and digital platforms have made educational content more accessible than ever,
                  they&#39;ve also created an ocean of information that often overwhelms learners. Juggling multiple
                  resources, managing time, and ensuring progress can be intimidating.
                </Text>

                <Text size="l" onBackground="neutral-medium" className="text-gray-600 dark:text-gray-300 text-justify">
                  Edux changes the learning process by utilizing the power of large language models (LLMs) and
                  personalized tools to make learning more effective and interactive. With features like detailed
                  explanations powered by LLMs, personalized study schedules, and interactive learning tools, Edux
                  transforms scattered study efforts into structured, goal-oriented journeys.
                </Text>
              </Column>
            </Column>

            <Column gap="20" fillWidth>
              {steps.map((step, index) => (
                <Card
                  key={index}
                  fillWidth
                  padding="32"
                  gap="16"
                  background="surface"
                  direction="row"
                  border="neutral-alpha-weak"
                  radius="xl"
                  className={`group transform transition-all duration-300 hover:shadow-xl border ${step.borderColor} ${step.shadowColor}`}
                  style={{
                    transform: activeCard === index ? "scale(1.03)" : "scale(1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Row gap="16" vertical="center">
                    <div className={`rounded-full p-3 ${step.color} transform group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(step.icon, {
                        size: 24,
                        className: step.iconColor,
                      })}
                    </div>

                    <Column gap="4">
                      <Heading as="h3" variant="heading-default-m">
                        {step.title}
                      </Heading>
                      <Text onBackground="neutral-medium">{step.description}</Text>
                    </Column>
                  </Row>
                </Card>
              ))}
            </Column>
          </Row>
        </Column>

        {/* Footer */}
        <Row fillWidth paddingY="32" paddingX="32" horizontal="space-between" className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <Column gap="8">
            <Logo size="s" icon={false} href="/" />
            <Text size="s" className="text-gray-500 dark:text-gray-400">© 2025 Edux. All rights reserved.</Text>
          </Column>
        </Row>
      </Column>
    </Column>
  )
}
