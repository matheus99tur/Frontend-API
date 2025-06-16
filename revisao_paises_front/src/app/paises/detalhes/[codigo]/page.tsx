"use client"

import api from "@/services/api";
import Pais from "@/types/pais";
import { Box, Typography } from "@mui/material"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Detalhes(){
    const params = useParams();
    const { codigo, nome, filtro } = params;
    const [pais, setPais] = useState<Pais>();
    useEffect(() => {
        api.get(`alpha/${codigo}`)
        .then(resposta =>{
            setPais((resposta.data as Pais[])[0]);
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, []); 
    return(
        <Box>
            <Typography variant="h4">Detalhe do pais</Typography>
            <Typography variant="h3">{pais?.name.common}</Typography>
        </Box>
    );
}

export default Detalhes;