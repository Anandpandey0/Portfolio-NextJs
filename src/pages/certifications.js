import Header from "@/components/Header";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
const certificates = [
  {
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-d4bd05b4-543f-4969-b060-49c092b4554c.jpg?v=1660490959000",
    title: " Bootstrap 4 Ultimate Guide 2022",
    provider: "Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-d4bd05b4-543f-4969-b060-49c092b4554c.jpg?v=1660490959000",
  },
  {
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-203eee8a-24d6-4ab7-86f6-173c20feef68.jpg?v=1626113034000",
    title: "HTML5 Ultimate Guide 2022",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-203eee8a-24d6-4ab7-86f6-173c20feef68/",
  },
  {
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-451fee37-8606-475b-aab8-e7a4a9e71b2e.jpg?v=1626114303000",
    title: "JavaScript Ultimate Guide 2022",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-451fee37-8606-475b-aab8-e7a4a9e71b2e/",
  },
  {
    img: "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/pyhton_certifcate.jpg",
    title: "Introduction to Python Completion Certificate",
    provider: "Coding Ninjas",
    link: "http://files.codingninjas.in/certificate2324438de0c08afcad70c33150b869f375bbbd9.pdf",
  },
];

const Certifications = () => {
  return (
    <>
      <Header />
      {/* {console.log(certificates)} */}
      <div className="flex gap-8 flex-wrap w-[90vw] mx-auto ">
        {certificates.map((certificate, index = 0) => (
          <Card maxW="sm" key={index + 1}>
            <CardBody>
              <Image
                src={certificate.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{certificate.title}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  {certificate.provider}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link href={certificate.link} target="_blank">
                  <Button variant="solid" colorScheme="blue">
                    Check credentials
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Certifications;
