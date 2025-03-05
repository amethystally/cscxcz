"use client"

import { DeploymentHelperDev } from "@/components/deployment-helper-dev"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// Your component logic here
const Page = () => {
  return (
    <div>
      <DeploymentHelperDev />
      <Button />
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Page
