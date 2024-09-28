import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableHead, TableHeader, TableRow } from '../../components/ui/table'
const AdminOrdersView = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          All Orders 
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
        </Table>
      </CardContent>
    </Card>
  )
}

export default AdminOrdersView