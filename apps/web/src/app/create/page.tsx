'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  daoname: z.string().min(3).max(20),
  tokenname: z.string().min(3).max(20),
  tokensymbol: z.string().min(2).max(5),
  tokenholders: z.array(z.string()).min(1),
  tokenholdersamount: z.array(z.number()).min(1),
  minquorum: z.number().min(0).max(100),
  votingdelay: z.number().min(0).max(100),
  votingperiod: z.number().min(0).max(100),
  timelockdelay: z.number().min(0).max(100),
  initialamount: z.number().min(0),
  distributiontoken: z.string().min(1),
  amountdistributedmonthly: z.number().min(0),
  grantees: z.array(z.string()).min(1),
})

function CreatePage() {
  const [grantees, setGrantees] = useState([""])
  const [tokenholders, setTokenholders] = useState([""])

  const addGrantee = () => {
    setGrantees([...grantees, ""])
  }

  const addTokenholder = () => {
    setTokenholders([...tokenholders, ""])
  }

  const handleGranteeChange = (index: number, value: string) => {
    const newGrantees = [...grantees]
    newGrantees[index] = value
    setGrantees(newGrantees)
    form.setValue("grantees", newGrantees)
  }

  const handleTokenholderChange = (index: number, value: string) => {
    const newTokenholders = [...tokenholders]
    newTokenholders[index] = value
    setTokenholders(newTokenholders)
    form.setValue("tokenholders", newTokenholders)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      daoname: "",
      tokenname: "",
      tokensymbol: "",
      tokenholders: [],
      tokenholdersamount: [],
      minquorum: 4,
      votingdelay: 1,
      votingperiod: 5,
      timelockdelay: 1,
      initialamount: 0,
      distributiontoken: "USDCx",
      amountdistributedmonthly: 0,
      grantees: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <h2>Create your organization</h2>
            <p>Name and define your DAO parameters so grantees know they are joining the right organization.</p>
            <Card>
              <CardHeader>
                <CardTitle>Claim a name</CardTitle>
                <CardDescription>QiBlaster uses the Ethereum Name Service (ENS) to assign names to organizations.</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="daoname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DAO name</FormLabel>
                      <FormControl>
                        <Input placeholder="qidao" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Token parameters</CardTitle>
                <CardDescription>These settings will determine the name and symbol of the token that will be created for your organization. Add members to define the initial distribution of this token.</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="tokenname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Token name</FormLabel>
                      <FormControl>
                        <Input placeholder="QiToken" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tokensymbol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Token symbol</FormLabel>
                      <FormControl>
                        <Input placeholder="QI" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {tokenholders.map((tokenholder, index) => (
                  <>
                  <FormField
                    key={index}
                    control={form.control}
                    name={`tokenholders.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Token holder {index + 1}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            value={tokenholder}
                            onChange={(e) => handleTokenholderChange(index, e.target.value)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    key={index}
                    control={form.control}
                    name={`tokenholdersamount.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Token holder amount {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  </>
                ))}
                <Button type="button" onClick={addTokenholder}>Add more</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Voting parameters</CardTitle>
                <CardDescription>Think about these parameters as a balancing act between ease of passing proposals and security against malicious proposals. That's an important – and tough – tradeoff to get right!</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="minquorum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum quorum</FormLabel>
                      <FormControl>
                        <Slider defaultValue={[33]} max={100} step={1} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="votingdelay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voting delay</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="1" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="votingperiod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voting period</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="5" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timelockdelay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timelock delay</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="1" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribution settings</CardTitle>
                <CardDescription>These parameters will determine the treasury size, how it will be distributed and the grantees that will receive it.</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="initialamount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initial amount</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="distributiontoken"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Distribution token</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Token" />
                          </SelectTrigger>
                      </FormControl>
                          <SelectContent>
                            <SelectItem value="USDCx">USDCx</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          This is the token that will be used to distribute the treasury.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amountdistributedmonthly"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount distributed monthly</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {grantees.map((grantee, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={`grantees.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grantee {index + 1}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            value={grantee}
                            onChange={(e) => handleGranteeChange(index, e.target.value)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
                <Button type="button" onClick={addGrantee}>Add more</Button>
              </CardContent>
            </Card>
            <Button type="submit">Create DAO</Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default CreatePage
