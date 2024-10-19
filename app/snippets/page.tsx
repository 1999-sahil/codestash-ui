'use client'

import React, { useEffect } from 'react'

function Snippets() {
    useEffect(() => {
        document.title = 'Snippets - codestash/ui';
      }, []);

  return (
    <div>Snippets page</div>
  )
}

export default Snippets