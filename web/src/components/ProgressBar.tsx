import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  progress: number
}

export function ProgressBar (props: ProgressBarProps) {
  return (
    <Progress.Root  max={100} className="h3 rounded-xl bg-zinc-700 w-full mt-4">
      <Progress.Indicator 
        data-value={props.progress}
        data-max={100} 
        className="h-3 rounded-xl bg-violet-600" 
        style={{
          width: `${props.progress}%`
        }}/>
    </Progress.Root>
  )
}
