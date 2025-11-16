import { useEffect, useState } from "react"

function Loading() {

  const [second, setSecond] = useState(0)
  const [message, setMessage] = useState("Please wait.")

  const messages = [
    "Waiting? It’s waking up.",
    "One sec - still loading!",
    "Almost there...",
    "Reason: the server goes to sleep on the free tier.",
    "So yeah, it naps after 15 minutes.",
    "That’s why it’s a bit slow right now.",
    "It’s warming up from its nap!",
    "Give it a moment to fully wake up.",
    "Should speed up once it’s awake.",
    "Thanks for being patient!"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(s => s + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (second < 2) return

    if ((second - 2) % 4 === 0) {
      const index = ((second - 2) / 4) % messages.length
      setMessage(messages[index])
    }
  }, [second])

  return (
    <div className="loader-div">
      <span className="loader">Load&nbsp;ng</span>
      <p className="loader-wait-message">
        {second < 2 ? "Please wait..." : message}
      </p>
    </div>
  )
}

export default Loading
