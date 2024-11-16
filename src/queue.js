async function sendToQueue (client, message) {
  const sender = client.createSender('test-queue')
  await sender.sendMessages(message)
  await sender.close()
}

async function receiveFromQueue (client) {
  const receiver = client.createReceiver('test-queue')
  const messages = await receiver.receiveMessages(1, { maxWaitTimeInMs: 5000 })
  if (messages.length) {
    await receiver.completeMessage(messages[0])
  }
  await receiver.close()
  return messages[0]?.body
}

export { sendToQueue, receiveFromQueue }
