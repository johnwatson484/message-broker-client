import { ServiceBusClient } from '@azure/service-bus'

const client = new ServiceBusClient('Endpoint=sb://default.default.default.localhost;SharedAccessKeyName=1234;SharedAccessKey=password;UseDevelopmentEmulator=true')

const sender = client.createSender('default')

const message = {
  body: 'Hello, World!'
}

await sender.sendMessages(message)
await sender.close()

const receiver = client.createReceiver('default')
await receiver.subscribe({
  processMessage: async (message) => {
    console.log(message.body)
  },
  processError: async (error) => {
    console.error(error)
  }
})

