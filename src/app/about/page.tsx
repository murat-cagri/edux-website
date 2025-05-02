"use client";

import { Card, Avatar, Button, Text } from "@/once-ui/components";
import { Flex, Grid } from "@/once-ui/components";

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
  return (
    <Flex
      direction="column"
      gap="8"
      padding="16"
      style={{ minHeight: "100vh" }} // Take up at least full viewport height
      vertical="center" // Center vertically
      horizontal="center" // Center horizontally
    >
      <Text variant="heading-strong-l" align="center">
        Contributors
      </Text>
      <Grid columns="2" gap="8">
        {contributors.map((contributor, index) => (
          <Card key={index} padding="16">
            <Flex direction="column" gap="4">
              <Flex vertical="center" gap="4">
                <Avatar src={contributor.photo} size="l" />
                <Flex direction="column">
                  <Text variant="heading-strong-m">{contributor.name}</Text>
                  <Text variant="body-default-s">@{contributor.username}</Text>
                </Flex>
              </Flex>
              <Text variant="body-default-s">
                School ID: {contributor.schoolId}
              </Text>
              <Text variant="body-default-s">Email: {contributor.email}</Text>
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary button-s"
              >
                View GitHub Profile
              </a>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Flex>
  );
}
