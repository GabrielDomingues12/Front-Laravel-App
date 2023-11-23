import React, { ReactNode, createContext, useState } from "react"
type DashContextType = {
  render: boolean
  setRender: React.Dispatch<React.SetStateAction<boolean>>
  renderTwo: boolean
  setRenderTwo: React.Dispatch<React.SetStateAction<boolean>>
}

export const dashContext = createContext<DashContextType>({
  render: false,
  setRender: () => {},
  renderTwo: false,
  setRenderTwo: () => {}
})

export function DashProvider({ children }: { children: ReactNode }) {
  const [render, setRender] = useState(false)
  const [renderTwo, setRenderTwo] = useState(false)
  const contextValues: DashContextType = {
    render: render,
    setRender: setRender,
    renderTwo: renderTwo,
    setRenderTwo: setRenderTwo
  }
  console.log(render)

  return (
    <dashContext.Provider value={contextValues}>
      {children}
    </dashContext.Provider>
  )
}
