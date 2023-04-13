import React from 'react'
import style from './Pagination.module.scss'

export default function Pagination({slide, slideLength}) {

  const bullets = Array(slideLength).fill(null)
  return (
        <div className={slide[1] || window.innerWidth < 600 ? style.paginateActive : style.paginate }>
            {
                bullets.map((bullet, index) => (
                    <div key={index} className={index + 1 === slide[0] ? style.paginationActive : style.pagination}></div>
                ))
            }
        </div>
  )
}
