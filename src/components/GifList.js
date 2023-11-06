
import React from "react";

export default function GifList({ data }) {
  return (
    <div>
      <ul>
        {
          data? <li key={GifList.id}><img src="data.images" alt=""/></li> : console.log()
        }
      </ul>
    </div>
  );
}