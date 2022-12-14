/* eslint-env browser */
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { Dagula } from 'dagula'
import { fromString } from 'uint8arrays'
import { encode } from 'multiformats/block'
import * as raw from 'multiformats/codecs/raw'
import { sha256 as hasher } from 'multiformats/hashes/sha2'
import { mockBlockstore, mockWaitUntil } from '../helpers.js'
import { withCdnCache } from '../../src/middleware.js'

describe('withCdnCache', () => {
  it('should respond 412: Precondition Failed for Cache-Control: only-if-cached', async () => {
    const waitUntil = mockWaitUntil()
    const path = ''
    const searchParams = new URLSearchParams()
    const block = await encode({ value: fromString('test'), codec: raw, hasher })
    const blockstore = mockBlockstore([block])
    const dagula = new Dagula(blockstore)
    const ctx = { waitUntil, dagula, dataCid: block.cid, path, searchParams }
    const env = { DEBUG: 'true' }

    const req = new Request('http://localhost/ipfs/bafy', {
      headers: { 'Cache-Control': 'only-if-cached' }
    })
    // set up global default cache to _not_ return a cached response
    // @ts-ignore mock for tests
    global.caches = { default: { match: () => {} } }

    const handler = () => { throw new Error('request should not reach handler') }
    const res = await withCdnCache(handler)(req, env, ctx)
    assert.strictEqual(res.status, 412)
  })
})
