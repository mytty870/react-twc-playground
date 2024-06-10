import { VariantProps, cva } from "class-variance-authority"
import { TwcComponentProps, twc } from "react-twc"

const cardVariants = cva("rounded-log border shadow-log p-4", {
  variants: {
    $color: {
      primary: "bg-slate-100",
      secondary: "bg-gray-500"
    }
  },
  defaultVariants: {
    $color: "primary"
  }
})

type cardProps = TwcComponentProps<"div"> & VariantProps<typeof cardVariants>

export const Card = twc.div<cardProps>(({ $color }) => cardVariants({ $color }))
