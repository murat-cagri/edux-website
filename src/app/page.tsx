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
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to scroll to the bottom of the page
  const scrollToNext = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    })
  }

  // @ts-ignore
  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <ScrollToTop>
        <IconButton variant="secondary" icon="chevronUp" />
      </ScrollToTop>
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
      <Row
        position="fixed"
        top="0"
        fillWidth
        horizontal="center"
        zIndex={3}
        background={isScrolled ? "surface" : undefined}
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
          <Logo size="s" icon={false} href="/" />
          <Row gap="16" hide="s">
            <Button href="/reports" size="s" label="Reports" weight="default" variant="tertiary" />
            <Button href="/about" size="s" label="About" weight="default" variant="tertiary" />
            <ThemeSwitcher />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton href="/reports" icon="fileText" variant="tertiary" tooltip="Reports" />
            <IconButton href="/about" icon="info" variant="tertiary" tooltip="About" />
            <ThemeSwitcher />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column fillWidth horizontal="center" gap="48" radius="xl" paddingTop="80" position="relative">
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
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              Revolutionizing Learning
              <Icon name="sparkles" size="s" marginLeft="8" />
            </InlineCode>
            <Heading wrap="balance" variant="display-strong-xl" align="center" marginBottom="16">
              Edux: Where Learning Meets Innovation
            </Heading>
            <Text align="center" marginBottom="24">
              In today&#39;s fast-paced world, learning and staying ahead require more than just access to resources.
              Edux combines AI-powered explanations, personalized study schedules, and interactive tools to make
              your educational journey more efficient, engaging, and effective.
            </Text>
            <Row marginY="32">
              <Button
                id="getStarted"
                label="Get Started"
                onClick={scrollToNext}
                variant="primary"
                arrowIcon
              />
            </Row>
          </Column>

          {/* Features Section */}
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative" paddingY="16">
            <Heading as="h2" variant="display-default-m">
              Features
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Powerful tools to enhance your learning experience
            </Text>

            <Row fillWidth gap="24" paddingY="32" mobileDirection="column">
              <Card
                fillWidth
                padding="32"
                gap="16"
                background="surface"
                direction="column"
                border="neutral-alpha-weak"
                radius="xl"
              >
                <Icon name="brain" size="xl" color="brand-medium" />
                <Heading as="h3" variant="heading-default-m">
                  AI-Powered Explanations
                </Heading>
                <Text onBackground="neutral-medium">
                  Get detailed explanations on complex topics powered by large language models, making difficult
                  concepts easier to understand in your preferred learning style.
                </Text>
              </Card>

              <Card
                fillWidth
                padding="32"
                gap="16"
                background="surface"
                direction="column"
                border="neutral-alpha-weak"
                radius="xl"
              >
                <Icon name="calendar" size="xl" color="accent-medium" />
                <Heading as="h3" variant="heading-default-m">
                  Personalized Study Schedules
                </Heading>
                <Text onBackground="neutral-medium">
                  Tailored study schedules that adapt to your learning pace, preferences, and deadlines, ensuring you stay on track
                  with your goals while maintaining work-life balance.
                </Text>
              </Card>

              <Card
                fillWidth
                padding="32"
                gap="16"
                background="surface"
                direction="column"
                border="neutral-alpha-weak"
                radius="xl"
              >
                <Icon name="tool" size="xl" color="success-medium" />
                <Heading as="h3" variant="heading-default-m">
                  Interactive Learning Tools
                </Heading>
                <Text onBackground="neutral-medium">
                  Generate flashcards, quizzes, mind maps, and skill trees from your uploaded content to boost understanding and
                  retention through active learning techniques.
                </Text>
              </Card>
            </Row>
          </Column>
        </Column>

        {/* How It Works Section */}
        <Row
          paddingX="32"
          fillWidth
          paddingY="128"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
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
          <Column fillWidth gap="32" flex={1}>
            <Heading as="h2" variant="display-default-m">
              How Edux Works
            </Heading>
            <Text onBackground="neutral-medium" marginBottom="24">
              While the internet and digital platforms have made educational content more accessible than ever, they&#39;ve
              also created an ocean of information that often overwhelms learners. Juggling multiple resources, managing
              time, and ensuring progress can be intimidating.
            </Text>
            <Text onBackground="neutral-medium">
              Edux changes the learning process by utilizing the power of large language models (LLMs) and personalized
              tools to make learning more effective and interactive. With features like detailed explanations powered by
              LLMs, personalized study schedules, and interactive learning tools, Edux transforms scattered study
              efforts into structured, goal-oriented journeys.
            </Text>
          </Column>

          <Column flex={1} gap="24">
            <Card
              fillWidth
              padding="24"
              gap="16"
              background="surface"
              direction="row"
              border="neutral-alpha-weak"
              radius="xl"
              vertical="center"
            >
              <Icon name="upload" size="l" background="brand-weak" padding="12" radius="full" />
              <Column gap="4">
                <Heading as="h3" variant="heading-default-s">
                  Upload Your Content
                </Heading>
                <Text onBackground="neutral-medium" size="s">
                  Import notes, textbooks, articles, or any learning material
                </Text>
              </Column>
            </Card>

            <Card
              fillWidth
              padding="24"
              gap="16"
              background="surface"
              direction="row"
              border="neutral-alpha-weak"
              radius="xl"
              vertical="center"
            >
              <Icon name="settings" size="l" background="accent-weak" padding="12" radius="full" />
              <Column gap="4">
                <Heading as="h3" variant="heading-default-s">
                  Customize Your Experience
                </Heading>
                <Text onBackground="neutral-medium" size="s">
                  Set learning goals, preferences, and deadlines
                </Text>
              </Column>
            </Card>

            <Card
              fillWidth
              padding="24"
              gap="16"
              background="surface"
              direction="row"
              border="neutral-alpha-weak"
              radius="xl"
              vertical="center"
            >
              <Icon name="sparkles" size="l" background="success-weak" padding="12" radius="full" />
              <Column gap="4">
                <Heading as="h3" variant="heading-default-s">
                  AI Processes Your Material
                </Heading>
                <Text onBackground="neutral-medium" size="s">
                  Our AI analyzes and organizes your content optimally
                </Text>
              </Column>
            </Card>

            <Card
              fillWidth
              padding="24"
              gap="16"
              background="surface"
              direction="row"
              border="neutral-alpha-weak"
              radius="xl"
              vertical="center"
            >
              <Icon name="graduationCap" size="l" background="warning-weak" padding="12" radius="full" />
              <Column gap="4">
                <Heading as="h3" variant="heading-default-s">
                  Learn Effectively
                </Heading>
                <Text onBackground="neutral-medium" size="s">
                  Use personalized tools and schedules to master your material
                </Text>
              </Column>
            </Card>
          </Column>
        </Row>
      </Column>
    </Column>
  )
}
