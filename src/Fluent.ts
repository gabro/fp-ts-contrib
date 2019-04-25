import { Alt, Alt1, Alt2, Alt2C } from 'fp-ts/lib/Alt'
import { Apply, Apply1, Apply2, Apply2C } from 'fp-ts/lib/Apply'
import { Chain, Chain1, Chain2, Chain2C } from 'fp-ts/lib/Chain'
import { Separated, Compactable, Compactable1, Compactable2, Compactable2C } from 'fp-ts/lib/Compactable'
import { Either } from 'fp-ts/lib/Either'
import { Filterable, Filterable1, Filterable2, Filterable2C } from 'fp-ts/lib/Filterable'
import { Foldable2v, Foldable2v1, Foldable2v2, Foldable2v2C } from 'fp-ts/lib/Foldable2v'
import { Predicate, identity } from 'fp-ts/lib/function'
import { Functor, Functor1, Functor2, Functor2C } from 'fp-ts/lib/Functor'
import { HKT, Type, Type2, URIS, URIS2, HKT2 } from 'fp-ts/lib/HKT'
import { Monoid } from 'fp-ts/lib/Monoid'
import { Option } from 'fp-ts/lib/Option'
import { Magma } from 'fp-ts/lib/Magma'
import { Setoid } from 'fp-ts/lib/Setoid'
import { Bifunctor, Bifunctor2 } from 'fp-ts/lib/Bifunctor'
import { Ord } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'
import { Profunctor, Profunctor2 } from 'fp-ts/lib/Profunctor'
import { Show } from 'fp-ts/lib/Show'
import { FunctorWithIndex, FunctorWithIndex1, FunctorWithIndex2, FunctorWithIndex2C } from 'fp-ts/lib/FunctorWithIndex'
import {
  FoldableWithIndex,
  FoldableWithIndex1,
  FoldableWithIndex2,
  FoldableWithIndex2C
} from 'fp-ts/lib/FoldableWithIndex'
import {
  FilterableWithIndex,
  FilterableWithIndex1,
  FilterableWithIndex2,
  FilterableWithIndex2C
} from 'fp-ts/lib/FilterableWithIndex'
import { Extend, Extend2, Extend1, Extend2C } from 'fp-ts/lib/Extend'

// TODO remove when fp-ts@1.17.2 lends
interface Bifunctor2C<F extends URIS2, L> {
  readonly URI: F
  readonly _L: L
  readonly bimap: <A, M, B>(fla: Type2<F, L, A>, f: (l: L) => M, g: (a: A) => B) => Type2<F, M, B>
}

// TODO remove when fp-ts@1.17.2 lends
interface Profunctor2C<F extends URIS2, L> extends Functor2C<F, L> {
  readonly promap: <A, C, D>(flc: Type2<F, L, C>, f: (a: A) => L, g: (c: C) => D) => Type2<F, A, D>
}

interface Fluent2C<F extends URIS2, I, L, A> {
  readonly I: I
  readonly value: Type2<F, L, A>
  show(this: Fluent2C<F, Show<Type2<F, L, A>>, L, A>): string
  equals(this: Fluent2C<F, Setoid<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): boolean
  compare(this: Fluent2C<F, Ord<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): Ordering
  concat(this: Fluent2C<F, Magma<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): Type2<F, L, A>
  map<B>(this: Fluent2C<F, Functor2C<F, L>, L, A>, f: (a: A) => B): Fluent2C<F, I, L, B>
  mapWithIndex<Ix, B>(
    this: Fluent2C<F, FunctorWithIndex2C<F, Ix, L>, L, A>,
    f: (i: Ix, a: A) => B
  ): Fluent2C<F, I, L, B>
  bimap<L, M, B>(this: Fluent2C<F, Bifunctor2C<F, L>, L, A>, f: (l: L) => M, g: (a: A) => B): Fluent2C<F, I, M, B>
  mapLeft<L, M>(this: Fluent2C<F, Bifunctor2C<F, L>, L, A>, f: (l: L) => M): Fluent2C<F, I, M, A>
  ap<B>(this: Fluent2C<F, Apply2C<F, L>, L, A>, fab: Type2<F, L, (a: A) => B>): Fluent2C<F, I, L, B>
  apFirst<B>(this: Fluent2C<F, Apply2C<F, L>, L, A>, that: Type2<F, L, B>): Fluent2C<F, I, L, A>
  apSecond<B>(this: Fluent2C<F, Apply2C<F, L>, L, A>, that: Type2<F, L, B>): Fluent2C<F, I, L, B>
  chain<B>(this: Fluent2C<F, Chain2C<F, L>, L, A>, f: (a: A) => Type2<F, L, B>): Fluent2C<F, I, L, B>
  flatten<A>(this: Fluent2C<F, Chain2C<F, L>, L, Type2<F, L, A>>): Fluent2C<F, I, L, A>
  extend<B>(this: Fluent2C<F, Extend2C<F, L>, L, A>, f: (fa: Type2<F, L, A>) => B): Fluent2C<F, I, L, B>
  duplicate(this: Fluent2C<F, Extend2C<F, L>, L, A>): Fluent2C<F, I, L, Type2<F, L, A>>
  reduce<B>(this: Fluent2C<F, Foldable2v2C<F, L>, L, A>, b: B, f: (b: B, a: A) => B): B
  foldMap<M>(this: Fluent2C<F, Foldable2v2C<F, L>, L, A>, M: Monoid<M>): (f: (a: A) => M) => M
  foldr<B>(this: Fluent2C<F, Foldable2v2C<F, L>, L, A>, b: B, f: (a: A, b: B) => B): B
  reduceWithIndex<Ix, B>(this: Fluent2C<F, FoldableWithIndex2C<F, Ix, L>, L, A>, b: B, f: (i: Ix, b: B, a: A) => B): B
  foldMapWithIndex<Ix, M>(
    this: Fluent2C<F, FoldableWithIndex2C<F, Ix, L>, L, A>,
    M: Monoid<M>
  ): (i: Ix, f: (a: A) => M) => M
  foldrWithIndex<Ix, B>(this: Fluent2C<F, FoldableWithIndex2C<F, Ix, L>, L, A>, b: B, f: (i: Ix, a: A, b: B) => B): B
  alt(this: Fluent2C<F, Alt2C<F, L>, L, A>, that: Type2<F, L, A>): Fluent2C<F, I, L, A>
  compact<A>(this: Fluent2<F, Compactable2C<F, L>, L, Option<A>>): Fluent2C<F, I, L, A>
  separate<A, B>(this: Fluent2C<F, Compactable2C<F, L>, L, Either<A, B>>): Separated<Type2<F, L, A>, Type2<F, L, B>>
  filter(this: Fluent2C<F, Filterable2C<F, L>, L, A>, p: Predicate<A>): Fluent2C<F, I, L, A>
  filterMap<B>(this: Fluent2C<F, Filterable2C<F, L>, L, A>, f: (a: A) => Option<B>): Fluent2C<F, I, L, B>
  partition(this: Fluent2C<F, Filterable2C<F, L>, L, A>, p: Predicate<A>): Separated<Type2<F, L, A>, Type2<F, L, A>>
  partitionMap<RL, RR>(
    this: Fluent2<F, Filterable2C<F, L>, L, A>,
    f: (a: A) => Either<RL, RR>
  ): Separated<Type2<F, L, RL>, Type2<F, L, RR>>
  filterWithIndex<Ix>(
    this: Fluent2C<F, FilterableWithIndex2C<F, Ix, L>, L, A>,
    p: (i: Ix, a: A) => boolean
  ): Fluent2C<F, I, L, A>
  filterMapWithIndex<Ix, B>(
    this: Fluent2C<F, FilterableWithIndex2C<F, Ix, L>, L, A>,
    f: (i: Ix, a: A) => Option<B>
  ): Fluent2<F, I, L, B>
  partitionWithIndex<Ix>(
    this: Fluent2C<F, FilterableWithIndex2C<F, Ix, L>, L, A>,
    p: (i: Ix, a: A) => boolean
  ): Separated<Type2<F, L, A>, Type2<F, L, A>>
  partitionMapWithIndex<Ix, RL, RR>(
    this: Fluent2C<F, FilterableWithIndex2C<F, Ix, L>, L, A>,
    f: (i: Ix, a: A) => Either<RL, RR>
  ): Separated<Type2<F, L, RL>, Type2<F, L, RR>>
  promap<A, C, D>(this: Fluent2C<F, Profunctor2C<F, L>, L, C>, f: (a: A) => L, g: (c: C) => D): Fluent2<F, I, A, D>
}

interface Fluent2<F extends URIS2, I, L, A> {
  readonly I: I
  readonly value: Type2<F, L, A>
  show(this: Fluent2<F, Show<Type2<F, L, A>>, L, A>): string
  equals(this: Fluent2<F, Setoid<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): boolean
  compare(this: Fluent2<F, Ord<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): Ordering
  concat(this: Fluent2<F, Magma<Type2<F, L, A>>, L, A>, that: Type2<F, L, A>): Type2<F, L, A>
  map<B>(this: Fluent2<F, Functor2<F>, L, A>, f: (a: A) => B): Fluent2<F, I, L, B>
  mapWithIndex<Ix, B>(this: Fluent2<F, FunctorWithIndex2<F, Ix>, L, A>, f: (i: Ix, a: A) => B): Fluent2<F, I, L, B>
  bimap<L, M, B>(this: Fluent2<F, Bifunctor2<F>, L, A>, f: (l: L) => M, g: (a: A) => B): Fluent2<F, I, M, B>
  mapLeft<L, M>(this: Fluent2<F, Bifunctor2<F>, L, A>, f: (l: L) => M): Fluent2<F, I, M, A>
  ap<B>(this: Fluent2<F, Apply2<F>, L, A>, fab: Type2<F, L, (a: A) => B>): Fluent2<F, I, L, B>
  apFirst<B>(this: Fluent2<F, Apply2<F>, L, A>, that: Type2<F, L, B>): Fluent2<F, I, L, A>
  apSecond<B>(this: Fluent2<F, Apply2<F>, L, A>, that: Type2<F, L, B>): Fluent2<F, I, L, B>
  chain<B>(this: Fluent2<F, Chain2<F>, L, A>, f: (a: A) => Type2<F, L, B>): Fluent2<F, I, L, B>
  flatten<A>(this: Fluent2<F, Chain2<F>, L, Type2<F, L, A>>): Fluent2<F, I, L, A>
  extend<B>(this: Fluent2<F, Extend2<F>, L, A>, f: (fa: Type2<F, L, A>) => B): Fluent2<F, I, L, B>
  duplicate(this: Fluent2<F, Extend2<F>, L, A>): Fluent2<F, I, L, Type2<F, L, A>>
  reduce<B>(this: Fluent2<F, Foldable2v2<F>, L, A>, b: B, f: (b: B, a: A) => B): B
  foldMap<M>(this: Fluent2<F, Foldable2v2<F>, L, A>, M: Monoid<M>): (f: (a: A) => M) => M
  foldr<B>(this: Fluent2<F, Foldable2v2<F>, L, A>, b: B, f: (a: A, b: B) => B): B
  reduceWithIndex<Ix, B>(this: Fluent2<F, FoldableWithIndex2<F, Ix>, L, A>, b: B, f: (i: Ix, b: B, a: A) => B): B
  foldMapWithIndex<Ix, M>(this: Fluent2<F, FoldableWithIndex2<F, Ix>, L, A>, M: Monoid<M>): (i: Ix, f: (a: A) => M) => M
  foldrWithIndex<Ix, B>(this: Fluent2<F, FoldableWithIndex2<F, Ix>, L, A>, b: B, f: (i: Ix, a: A, b: B) => B): B
  alt(this: Fluent2<F, Alt2<F>, L, A>, that: Type2<F, L, A>): Fluent2<F, I, L, A>
  compact<A>(this: Fluent2<F, Compactable2<F>, L, Option<A>>): Fluent2<F, I, L, A>
  separate<A, B>(this: Fluent2<F, Compactable2<F>, L, Either<A, B>>): Separated<Type2<F, L, A>, Type2<F, L, B>>
  filter(this: Fluent2<F, Filterable2<F>, L, A>, p: Predicate<A>): Fluent2<F, I, L, A>
  filterMap<B>(this: Fluent2<F, Filterable2<F>, L, A>, f: (a: A) => Option<B>): Fluent2<F, I, L, B>
  partition(this: Fluent2<F, Filterable2<F>, L, A>, p: Predicate<A>): Separated<Type2<F, L, A>, Type2<F, L, A>>
  partitionMap<RL, RR>(
    this: Fluent2<F, Filterable2<F>, L, A>,
    f: (a: A) => Either<RL, RR>
  ): Separated<Type2<F, L, RL>, Type2<F, L, RR>>
  filterWithIndex<Ix>(
    this: Fluent2<F, FilterableWithIndex2<F, Ix>, L, A>,
    p: (i: Ix, a: A) => boolean
  ): Fluent2<F, I, L, A>
  filterMapWithIndex<Ix, B>(
    this: Fluent2<F, FilterableWithIndex2<F, Ix>, L, A>,
    f: (i: Ix, a: A) => Option<B>
  ): Fluent2<F, I, L, B>
  partitionWithIndex<Ix>(
    this: Fluent2<F, FilterableWithIndex2<F, Ix>, L, A>,
    p: (i: Ix, a: A) => boolean
  ): Separated<Type2<F, L, A>, Type2<F, L, A>>
  partitionMapWithIndex<Ix, RL, RR>(
    this: Fluent2<F, FilterableWithIndex2<F, Ix>, L, A>,
    f: (i: Ix, a: A) => Either<RL, RR>
  ): Separated<Type2<F, L, RL>, Type2<F, L, RR>>
  promap<A, B, C, D>(this: Fluent2<F, Profunctor2<F>, B, C>, f: (a: A) => B, g: (c: C) => D): Fluent2<F, I, A, D>
}

interface Fluent1<F extends URIS, I, A> {
  readonly I: I
  readonly value: Type<F, A>
  show(this: Fluent1<F, Show<Type<F, A>>, A>): string
  equals(this: Fluent1<F, Setoid<Type<F, A>>, A>, that: Type<F, A>): boolean
  compare(this: Fluent1<F, Ord<Type<F, A>>, A>, that: Type<F, A>): Ordering
  concat(this: Fluent1<F, Magma<Type<F, A>>, A>, that: Type<F, A>): Type<F, A>
  map<B>(this: Fluent1<F, Functor1<F>, A>, f: (a: A) => B): Fluent1<F, I, B>
  mapWithIndex<Ix, B>(this: Fluent1<F, FunctorWithIndex1<F, Ix>, A>, f: (i: Ix, a: A) => B): Fluent1<F, I, B>
  ap<B>(this: Fluent1<F, Apply1<F>, A>, fab: Type<F, (a: A) => B>): Fluent1<F, I, B>
  apFirst<B>(this: Fluent1<F, Apply1<F>, A>, that: Type<F, B>): Fluent1<F, I, A>
  apSecond<B>(this: Fluent1<F, Apply1<F>, A>, that: Type<F, B>): Fluent1<F, I, B>
  chain<B>(this: Fluent1<F, Chain1<F>, A>, f: (a: A) => Type<F, B>): Fluent1<F, I, B>
  flatten<A>(this: Fluent1<F, Chain1<F>, Type<F, A>>): Fluent1<F, I, A>
  extend<B>(this: Fluent1<F, Extend1<F>, A>, f: (fa: Type<F, A>) => B): Fluent1<F, I, B>
  duplicate(this: Fluent1<F, Extend1<F>, A>): Fluent1<F, I, Type<F, A>>
  reduce<B>(this: Fluent1<F, Foldable2v1<F>, A>, b: B, f: (b: B, a: A) => B): B
  foldMap<M>(this: Fluent1<F, Foldable2v1<F>, A>, M: Monoid<M>): (f: (a: A) => M) => M
  foldr<B>(this: Fluent1<F, Foldable2v1<F>, A>, b: B, f: (a: A, b: B) => B): B
  reduceWithIndex<Ix, B>(this: Fluent1<F, FoldableWithIndex1<F, Ix>, A>, b: B, f: (i: Ix, b: B, a: A) => B): B
  foldMapWithIndex<Ix, M>(this: Fluent1<F, FoldableWithIndex1<F, Ix>, A>, M: Monoid<M>): (f: (i: Ix, a: A) => M) => M
  foldrWithIndex<Ix, B>(this: Fluent1<F, FoldableWithIndex1<F, Ix>, A>, b: B, f: (i: Ix, a: A, b: B) => B): B
  alt(this: Fluent1<F, Alt1<F>, A>, that: Type<F, A>): Fluent1<F, I, A>
  compact<A>(this: Fluent1<F, Compactable1<F>, Option<A>>): Fluent1<F, I, A>
  separate<A, B>(this: Fluent1<F, Compactable1<F>, Either<A, B>>): Separated<Type<F, A>, Type<F, B>>
  filter(this: Fluent1<F, Filterable1<F>, A>, p: Predicate<A>): Fluent1<F, I, A>
  filterMap<B>(this: Fluent1<F, Filterable1<F>, A>, f: (a: A) => Option<B>): Fluent1<F, I, B>
  partition(this: Fluent1<F, Filterable1<F>, A>, p: Predicate<A>): Separated<Type<F, A>, Type<F, A>>
  partitionMap<RL, RR>(
    this: Fluent1<F, Filterable1<F>, A>,
    f: (a: A) => Either<RL, RR>
  ): Separated<Type<F, RL>, Type<F, RR>>
  filterWithIndex<Ix>(this: Fluent1<F, FilterableWithIndex1<F, Ix>, A>, p: (i: Ix, a: A) => boolean): Fluent1<F, I, A>
  filterMapWithIndex<Ix, B>(
    this: Fluent1<F, FilterableWithIndex1<F, Ix>, A>,
    f: (i: Ix, a: A) => Option<B>
  ): Fluent1<F, I, B>
  partitionWithIndex<Ix>(
    this: Fluent1<F, FilterableWithIndex1<F, Ix>, A>,
    p: (i: Ix, a: A) => boolean
  ): Separated<Type<F, A>, Type<F, A>>
  partitionMapWithIndex<Ix, RL, RR>(
    this: Fluent1<F, FilterableWithIndex1<F, Ix>, A>,
    f: (i: Ix, a: A) => Either<RL, RR>
  ): Separated<Type<F, RL>, Type<F, RR>>
}

class FluentHKT<F, I, A> {
  constructor(readonly I: I, readonly value: HKT<F, A>) {}
  show<I extends Show<HKT<F, A>>>(this: FluentHKT<F, I, A>): string {
    return this.I.show(this.value)
  }
  equals<I extends Setoid<HKT<F, A>>>(this: FluentHKT<F, I, A>, that: HKT<F, A>): boolean {
    return this.I.equals(this.value, that)
  }
  compare<I extends Ord<HKT<F, A>>>(this: FluentHKT<F, I, A>, that: HKT<F, A>): Ordering {
    return this.I.compare(this.value, that)
  }
  concat<I extends Magma<HKT<F, A>>>(this: FluentHKT<F, I, A>, that: HKT<F, A>): HKT<F, A> {
    return this.I.concat(this.value, that)
  }
  map<I extends Functor<F>, B>(this: FluentHKT<F, I, A>, f: (a: A) => B): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.map(this.value, f))
  }
  mapWithIndex<Ix, I extends FunctorWithIndex<F, Ix>, B>(
    this: FluentHKT<F, I, A>,
    f: (i: Ix, a: A) => B
  ): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.mapWithIndex(this.value, f))
  }
  ap<I extends Apply<F>, B>(this: FluentHKT<F, I, A>, fab: HKT<F, (a: A) => B>): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.ap(fab, this.value))
  }
  apFirst<I extends Apply<F>, B>(this: FluentHKT<F, I, A>, that: HKT<F, B>): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.ap(this.I.map(this.value, a => () => a), that))
  }
  apSecond<I extends Apply<F>, B>(this: FluentHKT<F, I, A>, that: HKT<F, B>): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.ap(this.I.map(this.value, () => (b: B) => b), that))
  }
  chain<I extends Chain<F>, B>(this: FluentHKT<F, I, A>, f: (a: A) => HKT<F, B>): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.chain(this.value, f))
  }
  flatten<I extends Chain<F>, A>(this: FluentHKT<F, I, HKT<F, A>>): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.chain(this.value, identity))
  }
  extend<I extends Extend<F>, B>(this: FluentHKT<F, I, A>, f: (fa: HKT<F, A>) => B): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.extend(this.value, f))
  }
  duplicate<I extends Extend<F>>(this: FluentHKT<F, I, A>): FluentHKT<F, I, HKT<F, A>> {
    return new FluentHKT<F, I, HKT<F, A>>(this.I, this.I.extend(this.value, identity))
  }
  reduce<I extends Foldable2v<F>, B>(this: FluentHKT<F, I, A>, b: B, f: (b: B, a: A) => B): B {
    return this.I.reduce(this.value, b, f)
  }
  foldMap<I extends Foldable2v<F>, M>(this: FluentHKT<F, I, A>, M: Monoid<M>): (f: (a: A) => M) => M {
    const foldMapM = this.I.foldMap(M)
    return f => foldMapM(this.value, f)
  }
  foldr<I extends Foldable2v<F>, B>(this: FluentHKT<F, I, A>, b: B, f: (a: A, b: B) => B): B {
    return this.I.foldr(this.value, b, f)
  }
  reduceWithIndex<Ix, I extends FoldableWithIndex<F, Ix>, B>(
    this: FluentHKT<F, I, A>,
    b: B,
    f: (i: Ix, b: B, a: A) => B
  ): B {
    return this.I.reduceWithIndex(this.value, b, f)
  }
  foldMapWithIndex<Ix, I extends FoldableWithIndex<F, Ix>, M>(
    this: FluentHKT<F, I, A>,
    M: Monoid<M>
  ): (f: (i: Ix, a: A) => M) => M {
    const foldMapWithIndexM = this.I.foldMapWithIndex(M)
    return f => foldMapWithIndexM(this.value, f)
  }
  foldrWithIndex<Ix, I extends FoldableWithIndex<F, Ix>, B>(
    this: FluentHKT<F, I, A>,
    b: B,
    f: (i: Ix, a: A, b: B) => B
  ): B {
    return this.I.foldrWithIndex(this.value, b, f)
  }
  alt<I extends Alt<F>>(this: FluentHKT<F, I, A>, that: HKT<F, A>): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.alt(this.value, that))
  }
  compact<I extends Compactable<F>, A>(this: FluentHKT<F, I, Option<A>>): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.compact(this.value))
  }
  separate<I extends Compactable<F>, A, B>(this: FluentHKT<F, I, Either<A, B>>): Separated<HKT<F, A>, HKT<F, B>> {
    return this.I.separate(this.value)
  }
  filter<I extends Filterable<F>>(this: FluentHKT<F, I, A>, p: Predicate<A>): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.filter(this.value, p))
  }
  filterMap<I extends Filterable<F>, B>(this: FluentHKT<F, I, A>, f: (a: A) => Option<B>): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.filterMap(this.value, f))
  }
  partition<I extends Filterable<F>>(this: FluentHKT<F, I, A>, p: Predicate<A>): Separated<HKT<F, A>, HKT<F, A>> {
    return this.I.partition(this.value, p)
  }
  partitionMap<I extends Filterable<F>, RL, RR>(
    this: FluentHKT<F, I, A>,
    f: (a: A) => Either<RL, RR>
  ): Separated<HKT<F, RL>, HKT<F, RR>> {
    return this.I.partitionMap(this.value, f)
  }
  filterWithIndex<Ix, I extends FilterableWithIndex<F, Ix>>(
    this: FluentHKT<F, I, A>,
    p: (i: Ix, a: A) => boolean
  ): FluentHKT<F, I, A> {
    return new FluentHKT<F, I, A>(this.I, this.I.filterWithIndex(this.value, p))
  }
  filterMapWithIndex<Ix, I extends FilterableWithIndex<F, Ix>, B>(
    this: FluentHKT<F, I, A>,
    f: (i: Ix, a: A) => Option<B>
  ): FluentHKT<F, I, B> {
    return new FluentHKT<F, I, B>(this.I, this.I.filterMapWithIndex(this.value, f))
  }
  partitionWithIndex<Ix, I extends FilterableWithIndex<F, Ix>>(
    this: FluentHKT<F, I, A>,
    p: (i: Ix, a: A) => boolean
  ): Separated<HKT<F, A>, HKT<F, A>> {
    return this.I.partitionWithIndex(this.value, p)
  }
  partitionMapWithIndex<Ix, I extends FilterableWithIndex<F, Ix>, RL, RR>(
    this: FluentHKT<F, I, A>,
    f: (i: Ix, a: A) => Either<RL, RR>
  ): Separated<HKT<F, RL>, HKT<F, RR>> {
    return this.I.partitionMapWithIndex(this.value, f)
  }
}

class FluentHKT2<F, I, L, A> extends FluentHKT<F, I, A> {
  constructor(readonly I: I, readonly value: HKT2<F, L, A>) {
    super(I, value)
  }
  bimap<I extends Bifunctor<F>, M, B>(
    this: FluentHKT2<F, I, L, A>,
    f: (l: L) => M,
    g: (a: A) => B
  ): FluentHKT2<F, I, M, B> {
    return new FluentHKT2<F, I, M, B>(this.I, this.I.bimap(this.value, f, g))
  }
  mapLeft<I extends Bifunctor<F>, M>(this: FluentHKT2<F, I, L, A>, f: (l: L) => M): FluentHKT2<F, I, M, A> {
    return this.bimap(f, identity)
  }
  promap<I extends Profunctor<F>, A, B, C, D>(
    this: FluentHKT2<F, I, B, C>,
    f: (a: A) => B,
    g: (c: C) => D
  ): FluentHKT2<F, I, A, D> {
    return new FluentHKT2<F, I, A, D>(this.I, this.I.promap(this.value, f, g))
  }
}

export function fluent<F extends URIS2, I, L>(I: { URI: F; _L: L } & I): <A>(fa: Type2<F, L, A>) => Fluent2C<F, I, L, A>
export function fluent<F extends URIS2, I>(I: { URI: F } & I): <L, A>(fa: Type2<F, L, A>) => Fluent2<F, I, L, A>
export function fluent<F extends URIS, I>(I: { URI: F } & I): <A>(fa: Type<F, A>) => Fluent1<F, I, A>
export function fluent<F, I>(I: { URI: F } & I): <L, A>(fa: HKT2<F, L, A>) => FluentHKT2<F, I, L, A>
export function fluent<F, I>(I: { URI: F } & I): <A>(fa: HKT<F, A>) => FluentHKT<F, I, A>
export function fluent<F, I>(I: { URI: F } & I): <L, A>(fa: HKT2<F, L, A>) => any {
  return <L, A>(fa: HKT2<F, L, A>) => new FluentHKT2<F, I, L, A>(I, fa)
}
