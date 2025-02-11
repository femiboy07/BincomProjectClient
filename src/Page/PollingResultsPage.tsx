import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Table, TableActions, TableBody, TableCell, TableCheckbox, TableHead, TableHeader, TableRow } from "../components/Table";
import { baseUrl } from "../services/api"

export default function PollingResultsPage() {
    const params = useParams();
    console.log(params.pollingUnitId);
    const { data, isLoading } = useQuery({
        queryKey: ["pollingResults", { id: params.pollingUnitId! }],
        queryFn: async () => {
            const res = await baseUrl.get(`pollingunit/${params.pollingUnitId!}`);
            return res.data;
        }
    });



    if (isLoading) {
        return <div>Loading page, please wait...</div>;
    }

    // Ensure `data` is an array (convert if it's an object)
    const results = Array.isArray(data) ? data : [data];

    // Extract column headers from the first object in `data`
    const columns = results.length > 0 ? Object.keys(results[0]) : [];


    if (results.length === 0) {
        return <div>Sorry Polling Result Not Yet Collated</div>
    }

    return (
        <div className="flex flex-col text-center">
            <h1 className="mt-5 text-5xl">Polling Unit Results</h1>
            <div className="max-w-4xl mx-auto mt-10">
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <TableCheckbox />
                            </TableHead>
                            {columns.map((column) => (
                                <TableHead key={column}>{column}</TableHead>
                            ))}
                            <TableHead className="w-12">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <TableCheckbox />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell key={column}>{row[column]}</TableCell>
                                ))}
                                <TableCell>
                                    <TableActions />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}