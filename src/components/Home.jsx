import React from 'react'
import Timer from './Timer';
import { Page, Card, Layout, Button, EmptyState} from "@shopify/polaris";

export default function Home() {

    //here we setting timer
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
    const NOW_IN_MS = new Date().getTime()

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

  return (
    <Page 
        title='Add your own countdown clock!'
        primaryAction={
                <Button primary onClick={() => console.log('heo')}>Create a new timer</Button>
            }
        >
        <Layout sectioned>
            <Card sectioned>
                <EmptyState
                    image="https://i.ibb.co/6bsTzmN/svg-icon-free-fast-icon-1024848.png"
                    action={{
                        content: 'Create a new timer',
                        onAction: () => console.log('heo')
                    }}
                    heading="Here you can create your timers, or manage the existing ones"
                >
                    <p>Start by creating a new timer</p>
                </EmptyState>
            </Card>
            <Timer targetDate={dateTimeAfterThreeDays}/>
        </Layout>
    </Page>
  )
}
