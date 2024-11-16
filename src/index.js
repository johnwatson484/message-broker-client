import { ServiceBusClient } from '@azure/service-bus'
import { sendToQueue, receiveFromQueue } from './queue.js'
import { sendToTopic, receiveFromSubscription } from './topic.js'

const client = new ServiceBusClient('Endpoint=sb://default.default.default.localhost;SharedAccessKeyName=anything;SharedAccessKey=anything;UseDevelopmentEmulator=true')

await sendToQueue(client, { body: 'Hello World from Queue' })
const queueMessage = await receiveFromQueue(client)
console.log(queueMessage)

await sendToTopic(client, { body: 'Hello World from Topic' })
const subscriptionMessage = await receiveFromSubscription(client)
console.log(subscriptionMessage)

await client.close()


