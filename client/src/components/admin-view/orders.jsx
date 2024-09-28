import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Button } from "../ui/button"
import { Dialog } from "../ui/dialog"
import AdminOrderDetailsView from "./order-details"

const AdminOrdersView = () => {

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false)

  return (
    <Card className=" bg-white" >
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
          <TableBody>
            <TableRow>
              <TableCell> 1234 </TableCell>
              <TableCell> 24/5/2022 </TableCell>
              <TableCell> In Process </TableCell>
              <TableCell> $ 1000 </TableCell>
              <TableCell> 
                <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog} >
                  <Button 
                    onClick={() => setOpenDetailsDialog(true)}
                    className="bg-black text-white hover:bg-black rounded-xl hover:text-white" >View Details</Button>
                    <AdminOrderDetailsView />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AdminOrdersView