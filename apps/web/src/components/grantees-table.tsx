import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


const formSchema = z.object({
    'sem-the-bee.eth': z.number().min(0).max(5),
    'franculio.eth': z.number().min(0).max(5),
    'sofi-verse.eth': z.number().min(0).max(5)
})

export function GranteesTable() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            'sem-the-bee.eth': 1,
            'franculio.eth': 1,
            'sofi-verse.eth': 1
        },
      })
    
    const grantees = {
        'sem-the-bee.eth': {
            amountReceived: 100000000000000000000000000,
            amountPerMonth: 100000000000000000000000000,
        },
        'franculio.eth': {
            amountReceived: 100000000000000000000000000,
            amountPerMonth: 100000000000000000000000000,
        },
        'sofi-verse.eth': {
            amountReceived: 100000000000000000000000000,
            amountPerMonth: 100000000000000000000000000,
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Card>
    <CardHeader>
        <CardTitle>Grantees</CardTitle>
        <CardDescription>
            Evaluate the grantees and update the amounts per month.
        </CardDescription>
    </CardHeader>
    <CardContent>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <span>Grantee</span>
          </TableHead>
          <TableHead>
            <span>Amount Received</span>
          </TableHead>
          <TableHead>
            <span>Amount per Month</span>
          </TableHead>
          <TableHead>
            <span>Evaluation</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      {Object.entries(grantees).map(([grantee, data]) => (
      <TableBody key={grantee}>
        <TableRow>
          <TableCell>
            <span>{grantee}</span>
          </TableCell>
          <TableCell>
            <span>{data.amountReceived}</span>
          </TableCell>
          <TableCell>
            <span>{data.amountPerMonth}</span>
          </TableCell>
          <TableCell>
          <FormField
                  control={form.control}
                  name={grantee as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                        <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={Number(field.value).toString()}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Evaluation" />
                          </SelectTrigger>
                      </FormControl>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1 ⭐</SelectItem>
                            <SelectItem value="2">2 ⭐⭐</SelectItem>
                            <SelectItem value="3">3 ⭐⭐⭐</SelectItem>
                            <SelectItem value="4">4 ⭐⭐⭐⭐</SelectItem>
                            <SelectItem value="5">5 ⭐⭐⭐⭐⭐</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                  )}
                />
          </TableCell>
        </TableRow>
      </TableBody>
      ))}
    </Table>
    <Button type="submit">Update</Button>
    </form>
    </Form>
    </CardContent>
    </Card>
  )
}

