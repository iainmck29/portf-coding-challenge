import React from "react";
import { ResponsiveBar } from "@nivo/bar"

interface NivoPropType {
    data: any[]
}

export const NivoResponsiveBar = ({data}: any) => {
    return (
        <ResponsiveBar
        data={data}
        keys={["sumBeers"]}
        indexBy="brewDate"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#3182CE"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "brewDate",
          legendPosition: "middle",
          legendOffset: -40
        }}
      />
)
}
