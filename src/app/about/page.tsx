"use client";

import { useState, useEffect } from 'react';
import {
  Card,
  Avatar,
  Button,
  Text,
  Column,
  Row,
  SmartLink,
  IconButton,
  Background,
  Fade,
  Logo,
  ThemeSwitcher
} from "@/once-ui/components";
import { ArrowLeft, Github, Mail, IdCard } from "lucide-react";

const contributors = [
  {
    name: "Bilginer Oral",
    username: "bilgineroral",
    schoolId: "22103163",
    email: "bilginer.oral@ug.bilkent.edu.tr",
    profile: "https://github.com/bilgineroral",
    photo: "/images/nilginer.jpg",
  },
  {
    name: "Cahit Ediz Civan",
    username: "Edizc",
    schoolId: "22003206",
    email: "ediz.civan@ug.bilkent.edu.tr",
    profile: "https://github.com/Edizc",
    photo: "/images/edux.jpg",
  },
  {
    name: "Efe Kaan Fidancı",
    username: "EfeKN",
    schoolId: "22102589",
    email: "kaan.fidanci@ug.bilkent.edu.tr",
    profile: "https://github.com/EfeKN",
    photo: "/images/efekn.jpg",
  },
  {
    name: "Görkem Kadir Solun",
    username: "gorkemsolun",
    schoolId: "22003214",
    email: "kadir.solun@ug.bilkent.edu.tr",
    profile: "https://github.com/gorkemsolun",
    photo: "/images/gotken.jpg",
  },
  {
    name: "Murat Çağrı Kara",
    username: "murat-cagri",
    schoolId: "22102505",
    email: "cagri.kara@ug.bilkent.edu.tr",
    profile: "https://github.com/murat-cagri",
    photo: "/images/cagri.jpg",
  },
];

export default function ContributorsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

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
            <SmartLink href="/" className="self-center">
              <Button
                variant="tertiary"
                size="s"
                className="mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </SmartLink>

            <Text
              variant="display-strong-m"
              align="center"
              className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-transparent bg-clip-text"
            >
              Meet Our Team
            </Text>
            <Text
              variant="body-default-l"
              align="center"
              className="max-w-md text-gray-600 dark:text-gray-300"
            >
              The talented contributors who made this project possible
            </Text>
          </Column>
        </Column>

        {/* Contributors grid */}
        <Column
          padding="32"
          gap="32"
          className="bg-gray-50 dark:bg-gray-800/50"
        >
          <Column gap="24" horizontal="center" className="w-full">
            {/* First row - 3 contributors */}
            <Row horizontal="center" gap="16" className="w-full">
              {contributors.slice(0, 3).map((contributor, index) => (
                <Card
                  key={index}
                  className="w-64 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <Column className="h-full">
                    {/* Card header with gradient */}
                    <Row
                      fillWidth
                      paddingY="12"
                      horizontal="center"
                      className="bg-gradient-to-r from-purple-600 to-blue-500"
                    >
                      <Text variant="label-strong-l" className="text-white">
                        Contributor
                      </Text>
                    </Row>

                    {/* Card content */}
                    <Column padding="16" gap="12" className="h-full">
                      <Column horizontal="center" gap="8">
                        <Avatar
                          src={contributor.photo}
                          size="l"
                          className="border-4 border-white dark:border-gray-800 shadow-md"
                        />
                        <Column gap="1" horizontal="center">
                          <Text variant="heading-strong-s" align="center">{contributor.name}</Text>
                          <Text
                            variant="label-strong-s"
                            align="center"
                            className="text-purple-600 dark:text-purple-400"
                          >
                            @{contributor.username}
                          </Text>
                        </Column>
                      </Column>

                      <Column gap="8" className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Row gap="4" vertical="center">
                          <IdCard size={16} className="text-gray-500 dark:text-gray-400" />
                          <Text variant="body-default-xs">
                            <span className="text-gray-500 dark:text-gray-400"></span> {contributor.schoolId}
                          </Text>
                        </Row>

                        <Row gap="4" vertical="center">
                          <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                          <Text variant="body-default-xs" className="truncate">
                            <span className="text-gray-500 dark:text-gray-400"></span> {contributor.email.split('@')[0]}
                          </Text>
                        </Row>
                      </Column>

                      <Button
                        variant="primary"
                        size="s"
                        href={contributor.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-auto hover:bg-purple-700 transition-colors duration-300"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub Profile
                      </Button>
                    </Column>
                  </Column>
                </Card>
              ))}
            </Row>

            {/* Second row - 2 contributors */}
            <Row horizontal="center" gap="16" className="w-full">
              {contributors.slice(3, 5).map((contributor, index) => (
                <Card
                  key={index + 3}
                  className="w-64 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <Column className="h-full">
                    {/* Card header with gradient */}
                    <Row
                      fillWidth
                      paddingY="12"
                      horizontal="center"
                      className="bg-gradient-to-r from-purple-600 to-blue-500"
                    >
                      <Text variant="label-strong-l" className="text-white">
                        Contributor
                      </Text>
                    </Row>

                    {/* Card content */}
                    <Column padding="16" gap="12" className="h-full">
                      <Column horizontal="center" gap="8">
                        <Avatar
                          src={contributor.photo}
                          size="l"
                          className="border-4 border-white dark:border-gray-800 shadow-md"
                        />
                        <Column gap="1" horizontal="center">
                          <Text variant="heading-strong-s" align="center">{contributor.name}</Text>
                          <Text
                            variant="label-strong-s"
                            align="center"
                            className="text-purple-600 dark:text-purple-400"
                          >
                            @{contributor.username}
                          </Text>
                        </Column>
                      </Column>

                      <Column gap="8" className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Row gap="4" vertical="center">
                          <IdCard size={16} className="text-gray-500 dark:text-gray-400" />
                          <Text variant="body-default-xs">
                            <span className="text-gray-500 dark:text-gray-400">ID:</span> {contributor.schoolId}
                          </Text>
                        </Row>

                        <Row gap="4" vertical="center">
                          <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                          <Text variant="body-default-xs" className="truncate">
                            <span className="text-gray-500 dark:text-gray-400"></span> {contributor.email.split('@')[0]}
                          </Text>
                        </Row>
                      </Column>

                      <Button
                        variant="primary"
                        size="s"
                        href={contributor.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-auto hover:bg-purple-700 transition-colors duration-300"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub Profile
                      </Button>
                    </Column>
                  </Column>
                </Card>
              ))}
            </Row>
          </Column>
        </Column>

        {/* Footer section */}
        <Column
          fillWidth
          horizontal="center"
          paddingY="32"
          gap="16"
          className="border-t border-gray-200 dark:border-gray-800"
        >
          <Text variant="body-default-s" align="center" className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Project Team. All rights reserved.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}