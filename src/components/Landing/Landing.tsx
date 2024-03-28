import { Grid, Skeleton, Container, Button, Card, Overlay, Paper, Text, Title, Avatar, Group, Badge, AspectRatio, SimpleGrid } from '@mantine/core';
import classes from './Landing.module.css';
import { useEffect, useState } from 'react';
import { Image } from '@mantine/core';

export function Landing() {

  const [slidesData, setSlidesData] = useState<Array<any>>([])
  const [slidesData1, setSlidesData1] = useState<Array<any>>([])
  const [slidesData2, setSlidesData2] = useState([])


  useEffect(() => {
    console.log('in use effect')
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then((data: any) => {
        console.log("data", data.products)
        setSlidesData(data.products)
      });

    fetch('https://dummyjson.com/products/category/laptops')
      .then(res => res.json())
      .then((data: any) => {
        console.log("data", data.products)
        setSlidesData1(data.products)
      });

      fetch('https://dummyjson.com/products/category/lighting')
      .then(res => res.json())
      .then((data: any) => {
        console.log("data", data.products)
        setSlidesData2(data.products)
      });

  }, [])

  useEffect(() => {
    console.log("here", slidesData)
    console.log("here", slidesData1)

  }, [slidesData])

  const cards = slidesData2.slice(0,4).map((item:any) => (
    <Card key={item.id} p="md" radius="sm" component="a" href="#" className={classes.card3}>
      <AspectRatio ratio={1920 / 1080}>
        <Image  src={item.thumbnail} />
      </AspectRatio>
      <Text  size="lg" tt="uppercase" fw={700} mt="md">
        {item.title}
      </Text>
      <Text c="dimmed" className={classes.title3} mt={5}>
        {item.description}
      </Text>
    </Card>
  ));

  return (
    <Container fluid >
      <Card radius="md" className={classes.card}>
        <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

        <div className={classes.content}>
          <Text size="xl" fw={700} className={classes.title}>
            InnoMart
          </Text>

          <Text size="md" className={classes.description}>
            Save extra 25% and get special purchase. Upto 50% sale for this weekend only.
          </Text>

          <Button className={classes.action} variant="white" color="dark" >
            Order Now
          </Button>
        </div>
      </Card>

      <Grid grow gutter="xs">
        <Grid.Col span="content">
          {slidesData.length > 1 && <Paper shadow="md" p="xl" radius="md" style={{
            "background-image": `url(${slidesData?.[1]?.thumbnail ?? ''})`,
            "background-size": "cover",
            "background-position": "center",
            width: '500px',
            height: '300px'
          }}>
            <div>
              <Text className={classes.category1} size="xs">
                {slidesData?.[1].category ?? ''}
              </Text>
              <Title order={3} className={classes.title1}>
                {slidesData?.[1].title ?? ''}
              </Title>
            </div>
            {/* <Button variant="white" color="dark" mt={"100px"}>
              Up to 40% Off
            </Button> */}
            <Badge mt={"100px"} color="gray" size="lg">Up to 40% Off</Badge>
          </Paper>}
        </Grid.Col>
        <Grid.Col span={8}>
          {slidesData.length > 1 && <Card withBorder radius="md" p={0} className={classes.card2} style={{height:'300px'}}>
            <Group wrap="nowrap" gap={0}>
              <Image
                src={slidesData1[0].thumbnail}
                height={300}
              />
              <div className={classes.body2}>
                <Text tt="uppercase" c="white" fw={700} size="xl">
                  {slidesData1[0].title}
                </Text>
                <Text className={classes.title2} mt="xs" mb="md">
                  {slidesData1[0].description}
                </Text>
                <Badge mt={"100px"} color="black" size="xl">Shop Now!</Badge>
              </div>
            </Group>
          </Card>}

        </Grid.Col>
      </Grid>

      <Container fluid py="sm">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
    </Container>
  );
}