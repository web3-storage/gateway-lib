# Changelog

## [2.0.2](https://github.com/web3-storage/gateway-lib/compare/v2.0.1...v2.0.2) (2022-11-11)


### Bug Fixes

* better content-type detection for svg ([#17](https://github.com/web3-storage/gateway-lib/issues/17)) ([3f01e09](https://github.com/web3-storage/gateway-lib/commit/3f01e099a44d011bce0f27680095989366a53988))

## [2.0.1](https://github.com/web3-storage/gateway-lib/compare/v2.0.0...v2.0.1) (2022-10-21)


### Bug Fixes

* paths with URI encoded components ([#15](https://github.com/web3-storage/gateway-lib/issues/15)) ([6467199](https://github.com/web3-storage/gateway-lib/commit/64671995fc61a0e24b7af37167c1170ca860cf83))

## [2.0.0](https://github.com/web3-storage/gateway-lib/compare/v1.3.0...v2.0.0) (2022-10-19)


### ⚠ BREAKING CHANGES

* The `handleUnixfsFile` handler no longer pipes through FixedLengthStream.

### Features

* add withFixedLengthStream middleware ([76bf7b5](https://github.com/web3-storage/gateway-lib/commit/76bf7b5e0bfe59350ea78b2269f88a8c73634004))

## [1.3.0](https://github.com/web3-storage/gateway-lib/compare/v1.2.1...v1.3.0) (2022-10-18)


### Features

* better debug messages in dev ([89873c8](https://github.com/web3-storage/gateway-lib/commit/89873c8c585d71838e90da56ac97a6451fda4774))
* send 412 when not cached and request wants it _only_ if it is cached ([#13](https://github.com/web3-storage/gateway-lib/issues/13)) ([0d822f8](https://github.com/web3-storage/gateway-lib/commit/0d822f84229bd3c1206f73eecd522b0796c58d87))

## [1.2.1](https://github.com/web3-storage/gateway-lib/compare/v1.2.0...v1.2.1) (2022-10-12)


### Bug Fixes

* drop response clone ([#8](https://github.com/web3-storage/gateway-lib/issues/8)) ([59bb00b](https://github.com/web3-storage/gateway-lib/commit/59bb00be5a3acb0729616790fc283896c248f952))
* only cache if success status ([#10](https://github.com/web3-storage/gateway-lib/issues/10)) ([103faf3](https://github.com/web3-storage/gateway-lib/commit/103faf3ca6a01424058d4380f56b96497e982d94))

## [1.2.0](https://github.com/web3-storage/gateway-lib/compare/v1.1.0...v1.2.0) (2022-10-12)


### Features

* add with cdn cache middleware ([#7](https://github.com/web3-storage/gateway-lib/issues/7)) ([05e3f7a](https://github.com/web3-storage/gateway-lib/commit/05e3f7aeb5b7bc37294832c7ca48bde1a9e9bb49))
* unixfs directory handler ([403ae6c](https://github.com/web3-storage/gateway-lib/commit/403ae6c9de9d4fc95a95dfab0546ce78bbf83794))


### Bug Fixes

* composeMiddleware type ([d101941](https://github.com/web3-storage/gateway-lib/commit/d101941e08a8b22945790f85aad7cf47f094182d))
* export types from bindings ([eaaa11e](https://github.com/web3-storage/gateway-lib/commit/eaaa11eb321588b298bc8e95a3c941e44319ac49))

## [1.1.0](https://github.com/web3-storage/gateway-lib/compare/v1.0.2...v1.1.0) (2022-10-12)


### Features

* add content disposition header ([#4](https://github.com/web3-storage/gateway-lib/issues/4)) ([52ec13d](https://github.com/web3-storage/gateway-lib/commit/52ec13d0605fa1ff01c0a34a279ec81f71360be9))


### Bug Fixes

* built types ([c5cedc4](https://github.com/web3-storage/gateway-lib/commit/c5cedc46f1b4399f1852f4c73dd4c08b2a1780c6))
* types ([b96c885](https://github.com/web3-storage/gateway-lib/commit/b96c885f6f9dc8f42e0e3e7202f908b29f7ea2df))
* used middleware name ([eac0d2c](https://github.com/web3-storage/gateway-lib/commit/eac0d2ccc33ee0ac3ab8849fef373866c77fe754))

## [1.0.2](https://github.com/web3-storage/gateway-lib/compare/v1.0.1...v1.0.2) (2022-10-12)


### Bug Fixes

* include src directory in published package ([f4d4bf2](https://github.com/web3-storage/gateway-lib/commit/f4d4bf2df888cd6c7ffcb8bb886dd1cfaec6bd0b))

## [1.0.1](https://github.com/web3-storage/gateway-lib/compare/v1.0.0...v1.0.1) (2022-10-12)


### Bug Fixes

* ci config ([9d378f2](https://github.com/web3-storage/gateway-lib/commit/9d378f244cc14e68b310d0e45dc39d20a6c289b1))

## 1.0.0 (2022-10-12)


### Features

* initial commit ([965eb00](https://github.com/web3-storage/gateway-lib/commit/965eb00ea4aea6451d853ed07bdb82b5cbcdbf55))
