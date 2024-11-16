async function sendToTopic (client, message) {
  const sender = client.createSender('test-topic')
  await sender.sendMessages(message)
  await sender.close()
}

async function receiveFromSubscription (client) {
  const receiver = client.createReceiver('test-topic', 'test-subscription')
  const messages = await receiver.receiveMessages(1, { maxWaitTimeInMs: 5000 })
  if (messages.length) {
    await receiver.completeMessage(messages[0])
  }
  await receiver.close()
  return messages[0]?.body
}

export { sendToTopic, receiveFromSubscription }
