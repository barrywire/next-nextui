// Next imports
import Head from 'next/head'

// NextUI Component imports
import { Navbar, Button, Link, Text } from '@nextui-org/react';

// Component imports
import { Layout } from '../components/Layout';


export default function Home()
{
  const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
    'Team',
    'Help & Feedback',
    'Login',
    'Sign Up',
  ];
  return (
    <>
      <Head>
        <title>Nextjs NextUI Template</title>
        <meta name='description' content='Custom nextjs template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='container'>
          <Layout>
            <Navbar isBordered variant='sticky'>

              <Navbar.Brand>
                <Navbar.Toggle aria-label='toggle navigation' />
                <Text b color='inherit' hideIn='sm' className='px-2'>
                  ACME
                </Text>
              </Navbar.Brand>


              <Navbar.Content enableCursorHighlight hideIn='sm' variant='highlight-solid' activeColor='warning'>
                <Navbar.Link href='#'>Features</Navbar.Link>
                <Navbar.Link isActive href='#'>
                  Customers
                </Navbar.Link>
                <Navbar.Link href='#'>Pricing</Navbar.Link>
                <Navbar.Link href='#'>Company</Navbar.Link>
              </Navbar.Content>

              <Navbar.Content>
                <Navbar.Link color='danger' href='#'>
                  Login
                </Navbar.Link>
                <Navbar.Item>
                  <Button auto flat as={Link} href='#'>
                    Sign Up
                  </Button>
                </Navbar.Item>
              </Navbar.Content>

              <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                  <Navbar.CollapseItem key={item}>
                    <Link
                      color='inherit'
                      css={{
                        minWidth: '100%',
                      }}
                      href='#'
                    >
                      {item}
                    </Link>
                  </Navbar.CollapseItem>
                ))}
              </Navbar.Collapse>

            </Navbar>
          </Layout>

        </div>
      </main>

    </>
  )
}
