'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { trpc } from '@/app/_trpc/client'

const UpgradeButton = () => {
  const { mutate: createStripeSession } = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url ?? '/dashboard/billing'
    }
  })
  // todo: i18n
  return (
    <Button
      onClick={() => createStripeSession()}
      className=' w-full'>
      Upgrade Now <ArrowRight className=' h-5 w-5 ml-1.5' />
    </Button>
  )
}
//9.35

export default UpgradeButton
