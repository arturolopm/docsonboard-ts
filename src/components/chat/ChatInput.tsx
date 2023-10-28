import { Send } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useContext, useRef } from 'react'
import { ChatContext } from './ChatContext'

interface ChatInputProps {
  isDisabled?: boolean
}
const ChatInput = ({ isDisabled }: ChatInputProps) => {
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addMessage()
    textareaRef.current?.focus()
  }
  return (
    <div className='absolute bottom-0 left-0 w-full'>
      <div className=' mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
        <div className=' relative flex h-full flex-1 items-stretch md:flex-col'>
          <div className=' relative flex flex-col w-full flex-grow p-4'>
            <form
              onSubmit={handleSubmit}
              className=' relative'>
              {/* replace-n18 */}
              <Textarea
                rows={1}
                maxRows={4}
                ref={textareaRef}
                autoFocus
                onChange={handleInputChange}
                value={message}
                placeholder='Enter your question...'
                className='resize-none pr-12 text-base py-3 scrollbar-thum-zinc scrollbar-thumb-rounded scrollbar-track-zinc-lighter scrollbar-w-2 scrolling-touch'
              />
              <Button
                disabled={isLoading || isDisabled}
                className=' absolute bottom-1.5 right-[8px]'
                aria-label='send message'
                type='submit'>
                <Send className='h-4 w-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInput
