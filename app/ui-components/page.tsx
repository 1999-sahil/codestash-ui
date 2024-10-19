'use client'

import React, { useEffect } from 'react'

function UiComponents() {
    useEffect(() => {
        document.title = 'Components - codestash/ui';
      }, []);

  return (
    <div>Snippets page</div>
  )
}

export default UiComponents