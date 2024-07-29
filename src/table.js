import { useEffect, useState } from "react";
import axios from "axios";

const Table3 = () => {
    const [table, setTable] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { status, data } = await axios.get("https://fakestoreapi.com/products");
                if (status === 200) {
                    setTable(data);
                    setLoader(false);
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
    };

    const thTdStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'left',
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
    };

    return (
        <>
            {loader ? (
                <p>Loading...</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={{ ...thTdStyle, ...thStyle }}>ID</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>Title</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>price</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>description</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>category</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>image</th>
                            {/* <th style={{ ...thTdStyle, ...thStyle }}>rating</th> */}
                            <th style={{ ...thTdStyle, ...thStyle }}>rate</th>
                            <th style={{ ...thTdStyle, ...thStyle }}>count</th>

                        </tr>
                    </thead>
                    <tbody>
                        {table.map((each) => {
                            return (
                                <tr key={each.id}>
                                    <td style={thTdStyle}>{each.id}</td>
                                    <td style={thTdStyle}>{each.title}</td>
                                   <td style={thTdStyle}>{each.price}</td>
                                    <td style={thTdStyle}>{each.description}</td>
                                    <td style={thTdStyle}>{each.category}</td>
                                    <td style={thTdStyle}> <img src={each.image} alt={each.title} width="50" /></td>
                                    {/* <td style={thTdStyle}>{each.rating}</td> */}
                                     <td style={thTdStyle}>{each.rating.rate}</td>
                                    <td style={thTdStyle}>{each.rating.count}</td>  
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Table3;
