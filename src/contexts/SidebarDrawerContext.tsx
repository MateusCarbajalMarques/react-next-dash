import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const discloure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    discloure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={discloure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
