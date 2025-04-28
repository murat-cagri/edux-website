"use client"

import { Input } from "@/once-ui/components/Input"

import {
  Heading,
  Text,
  Button,
  Icon,
  Logo,
  Background,
  Card,
  Fade,
  IconButton,
  Column,
  Row,
  ThemeSwitcher,
} from "@/once-ui/components"
import { useState, useEffect } from "react"

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former professor of Educational Psychology with 15+ years of experience in learning science. Sarah founded Edux to revolutionize how students learn and retain information.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/sarahchen",
        linkedin: "https://linkedin.com/in/sarahchen",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "AI researcher and former lead engineer at Google Brain. Michael leads our technical team in developing cutting-edge learning algorithms and personalization systems.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/michaelrodriguez",
        linkedin: "https://linkedin.com/in/michaelrodriguez",
      },
    },
    {
      name: "Dr. Aisha Patel",
      role: "Chief Learning Officer",
      bio: "Cognitive neuroscientist specializing in memory formation and knowledge retention. Aisha ensures our platform is built on solid scientific principles.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/aishapatel",
        linkedin: "https://linkedin.com/in/aishapatel",
      },
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Former product lead at Khan Academy with a passion for educational technology. James oversees the development of intuitive and effective learning tools.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      name: "Elena Kowalski",
      role: "Head of Content",
      bio: "Curriculum development expert with experience at leading educational publishers. Elena ensures our content is engaging, accurate, and pedagogically sound.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/elenakowalski",
        linkedin: "https://linkedin.com/in/elenakowalski",
      },
    },
    {
      name: "David Nguyen",
      role: "UX/UI Director",
      bio: "Award-winning designer with a focus on accessible and inclusive interfaces. David leads our design team in creating beautiful and functional learning experiences.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "https://twitter.com/davidnguyen",
        linkedin: "https://linkedin.com/in/davidnguyen",
      },
    },
  ]

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
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
        shadow={isScrolled ? "shadow-md" : undefined}
        transition="all 0.3s ease"
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
            <ThemeSwitcher size="s" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton href="/reports" icon="fileText" variant="tertiary" tooltip="Reports" />
            <IconButton href="/about" icon="info" variant="tertiary" tooltip="About" />
            <ThemeSwitcher size="s" />
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
        {/* Header Section */}
        <Column
          fillWidth
          horizontal="center"
          gap="32"
          radius="xl"
          paddingTop="80"
          paddingBottom="40"
          position="relative"
          background="brand-weak"
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
          />
          <Column fillWidth horizontal="center" gap="24" padding="32" position="relative">
            <Heading wrap="balance" variant="display-strong-l" align="center" marginBottom="16">
              About Edux
            </Heading>
            <Text align="center" maxWidth="xl" marginBottom="24">
              We're on a mission to transform education through AI-powered personalization and scientifically-backed
              learning methods.
            </Text>
          </Column>
        </Column>

        {/* Our Story Section */}
        <Row
          paddingX="32"
          fillWidth
          paddingY="64"
          gap="48"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Column fillWidth gap="24" flex={1}>
            <Heading as="h2" variant="display-default-m">
              Our Story
            </Heading>
            <Text onBackground="neutral-medium" marginBottom="16">
              Edux began in 2022 when Dr. Sarah Chen, frustrated with the limitations of traditional education,
              envisioned a learning platform that could adapt to each student's unique needs and learning style.
            </Text>
            <Text onBackground="neutral-medium" marginBottom="16">
              After partnering with AI researcher Michael Rodriguez and cognitive neuroscientist Dr. Aisha Patel, the
              team developed a prototype that combined cutting-edge AI with established learning science principles.
            </Text>
            <Text onBackground="neutral-medium">
              Today, Edux serves over 10,000 active learners daily, helping students around the world achieve their
              educational goals more efficiently and effectively than ever before.
            </Text>
          </Column>

          <Card flex={1} padding="0" background="surface" border="neutral-alpha-weak" radius="xl" overflow="hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="The Edux team collaborating"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Card>
        </Row>

        {/* Our Mission Section */}
        <Row
          paddingX="32"
          fillWidth
          paddingY="64"
          gap="48"
          position="relative"
          mobileDirection="column-reverse"
          vertical="center"
          background="surface-strong"
        >
          <Card flex={1} padding="0" background="surface" border="neutral-alpha-weak" radius="xl" overflow="hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Students using Edux platform"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Card>

          <Column fillWidth gap="24" flex={1}>
            <Heading as="h2" variant="display-default-m">
              Our Mission
            </Heading>
            <Text onBackground="neutral-medium" marginBottom="16">
              At Edux, we believe that education should be personalized, engaging, and effective. Our mission is to
              empower learners of all ages to reach their full potential through technology that adapts to their unique
              needs.
            </Text>
            <Text onBackground="neutral-medium" marginBottom="16">
              We're committed to:
            </Text>
            <Column gap="12">
              <Row gap="12" vertical="center">
                <Icon name="check" size="m" color="success-medium" />
                <Text onBackground="neutral-medium">Making quality education accessible to everyone</Text>
              </Row>
              <Row gap="12" vertical="center">
                <Icon name="check" size="m" color="success-medium" />
                <Text onBackground="neutral-medium">Developing tools based on scientific research</Text>
              </Row>
              <Row gap="12" vertical="center">
                <Icon name="check" size="m" color="success-medium" />
                <Text onBackground="neutral-medium">Continuously innovating to improve learning outcomes</Text>
              </Row>
              <Row gap="12" vertical="center">
                <Icon name="check" size="m" color="success-medium" />
                <Text onBackground="neutral-medium">Respecting user privacy and data security</Text>
              </Row>
            </Column>
          </Column>
        </Row>

        {/* Team Section */}
        <Column fillWidth paddingX="32" paddingY="64" gap="48">
          <Heading as="h2" variant="display-default-m" align="center">
            Meet Our Team
          </Heading>

          <Row fillWidth gap="24" wrap="wrap" horizontal="center">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                width="30%"
                minWidth="280px"
                padding="0"
                background="surface"
                direction="column"
                border="neutral-alpha-weak"
                radius="xl"
                overflow="hidden"
                hover={{
                  shadow: "l",
                  scale: 1.02,
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  style={{ width: "100%", height: "240px", objectFit: "cover" }}
                />
                <Column padding="24" gap="12">
                  <Heading as="h3" variant="heading-default-m">
                    {member.name}
                  </Heading>
                  <Text onBackground="brand-medium" weight="medium" marginBottom="8">
                    {member.role}
                  </Text>
                  <Text onBackground="neutral-medium" size="s">
                    {member.bio}
                  </Text>
                  <Row gap="8" marginTop="8">
                    <IconButton icon="twitter" variant="tertiary" href={member.social.twitter} size="s" />
                    <IconButton icon="linkedin" variant="tertiary" href={member.social.linkedin} size="s" />
                  </Row>
                </Column>
              </Card>
            ))}
          </Row>
        </Column>

        {/* Values Section */}
        <Column fillWidth paddingX="32" paddingY="64" gap="32" background="surface-strong">
          <Heading as="h2" variant="display-default-m" align="center">
            Our Values
          </Heading>

          <Row fillWidth gap="24" mobileDirection="column">
            <Card
              fillWidth
              padding="32"
              gap="16"
              background="surface"
              direction="column"
              border="neutral-alpha-weak"
              radius="xl"
              hover={{
                shadow: "m",
                scale: 1.02,
                transition: "all 0.3s ease",
              }}
            >
              <Icon name="heart" size="xl" color="brand-medium" />
              <Heading as="h3" variant="heading-default-m">
                Empathy
              </Heading>
              <Text onBackground="neutral-medium">
                We put ourselves in our users' shoes, understanding their challenges and designing solutions that
                address their real needs.
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
              hover={{
                shadow: "m",
                scale: 1.02,
                transition: "all 0.3s ease",
              }}
            >
              <Icon name="lightbulb" size="xl" color="accent-medium" />
              <Heading as="h3" variant="heading-default-m">
                Innovation
              </Heading>
              <Text onBackground="neutral-medium">
                We constantly push boundaries, combining cutting-edge technology with educational best practices to
                create transformative learning experiences.
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
              hover={{
                shadow: "m",
                scale: 1.02,
                transition: "all 0.3s ease",
              }}
            >
              <Icon name="shield" size="xl" color="success-medium" />
              <Heading as="h3" variant="heading-default-m">
                Integrity
              </Heading>
              <Text onBackground="neutral-medium">
                We're committed to ethical practices, transparency in our operations, and responsible use of AI and user
                data.
              </Text>
            </Card>
          </Row>
        </Column>

        {/* Contact Section */}
        <Column fillWidth paddingX="32" paddingY="64" gap="32">
          <Heading as="h2" variant="display-default-m" align="center">
            Get in Touch
          </Heading>

          <Card
            fillWidth
            padding="32"
            gap="24"
            background="surface"
            direction="column"
            border="neutral-alpha-weak"
            radius="xl"
          >
            <Row fillWidth gap="32" mobileDirection="column">
              <Column gap="16" flex={1}>
                <Heading as="h3" variant="heading-default-s">
                  Contact Information
                </Heading>

                <Row gap="12" vertical="center">
                  <Icon name="mail" size="m" color="brand-medium" />
                  <Text onBackground="neutral-medium">info@edux.com</Text>
                </Row>

                <Row gap="12" vertical="center">
                  <Icon name="phone" size="m" color="brand-medium" />
                  <Text onBackground="neutral-medium">+1 (555) 123-4567</Text>
                </Row>

                <Row gap="12" vertical="center">
                  <Icon name="mapPin" size="m" color="brand-medium" />
                  <Text onBackground="neutral-medium">123 Learning Lane, San Francisco, CA 94105</Text>
                </Row>

                <Row gap="12" marginTop="16">
                  <IconButton icon="twitter" variant="secondary" href="https://twitter.com/edux" />
                  <IconButton icon="instagram" variant="secondary" href="https://instagram.com/edux" />
                  <IconButton icon="linkedin" variant="secondary" href="https://linkedin.com/company/edux" />
                  <IconButton icon="youtube" variant="secondary" href="https://youtube.com/edux" />
                </Row>
              </Column>

              <Column gap="16" flex={1}>
                <Heading as="h3" variant="heading-default-s">
                  Send Us a Message
                </Heading>

                <Input type="text" placeholder="Your Name" width="full" />

                <Input type="email" placeholder="Your Email" width="full" />

                <Input type="textarea" placeholder="Your Message" rows={4} width="full" />

                <Button label="Send Message" variant="primary" icon="send" />
              </Column>
            </Row>
          </Card>
        </Column>
      </Column>
    </Column>
  )
}
