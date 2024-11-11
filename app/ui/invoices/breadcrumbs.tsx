/*
 * @Author: wangyangbin wybdream@163.com
 * @Date: 2024-11-07 09:51:23
 * @LastEditors: wangyangbin wybdream@163.com
 * @LastEditTime: 2024-11-11 11:28:11
 * @FilePath: \nextjs-dashboard\app\ui\invoices\breadcrumbs.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { clsx } from 'clsx'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx('flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <span className="mx-3 inline-block">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
