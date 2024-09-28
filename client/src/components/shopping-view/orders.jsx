import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'

const ShoppingOrders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Orders History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead >
                <span className="sr-only" >Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell> 1234 </TableCell>
              <TableCell> 24/5/2022 </TableCell>
              <TableCell> In Process </TableCell>
              <TableCell> $ 1000 </TableCell>
              <TableCell> 
                <Button className="bg-black text-white hover:bg-black rounded-xl hover:text-white" >View Details</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ShoppingOrders