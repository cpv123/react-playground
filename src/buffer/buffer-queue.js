const noop = () => {}

class BufferQueue {
  constructor(finaliser = noop, maxCount = 10) {
		this.queue = []
		this.maxCount = maxCount
		this.finaliser = finaliser
	}

	get count() {
		return this.queue.length
	}
	
	add(item) {
		this.queue.push(item)

		if (this.count >= this.maxCount) {
			this.flush()
		}

		return this
	}

	flush() {
		if (!this.count) return this

		this.finaliser(this.queue)
		this.reset()

		return this
	}

	reset() {
		this.queue = []
		return this
	}
}

export default BufferQueue
