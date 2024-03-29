/**
 * Client
 **/

import * as runtime from "./runtime/library";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Movies
 *
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>;
/**
 * Model Genres
 *
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject,
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movies.findMany()
   * ```
   */
  get movies(): Prisma.MoviesDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Genres
   * const genres = await prisma.genres.findMany()
   * ```
   */
  get genres(): Prisma.GenresDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends BigInt
          ? False
          : T extends object
            ? True
            : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Movies: "Movies";
    Genres: "Genres";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps: "user" | "movies" | "genres";
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>;
        fields: Prisma.MoviesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[];
          };
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>;
          };
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovies>;
          };
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MoviesGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.MoviesFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.MoviesAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>;
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number;
          };
        };
      };
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>;
        fields: Prisma.GenresFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[];
          };
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>;
          };
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGenres>;
          };
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GenresGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.GenresFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.GenresAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>;
            result: $Utils.Optional<GenresCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    movies: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | UserCountOutputTypeCountMoviesArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoviesWhereInput;
  };

  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    genres: number;
  };

  export type MoviesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    genres?: boolean | MoviesCountOutputTypeCountGenresArgs;
  };

  // Custom InputTypes

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountGenresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GenresWhereInput;
  };

  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    movies: number;
  };

  export type GenresCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | GenresCountOutputTypeCountMoviesArgs;
  };

  // Custom InputTypes

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountMoviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoviesWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    email: string | null;
    name: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    email: string | null;
    name: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    email: number;
    name: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    email?: true;
    name?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    email?: true;
    name?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    email?: true;
    name?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    name: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      email?: boolean;
      name?: boolean;
      movies?: boolean | User$moviesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    email?: boolean;
    name?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | User$moviesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    movies<T extends User$moviesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$moviesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
    readonly email: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.movies
   */
  export type User$moviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    where?: MoviesWhereInput;
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    cursor?: MoviesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null;
    _avg: MoviesAvgAggregateOutputType | null;
    _sum: MoviesSumAggregateOutputType | null;
    _min: MoviesMinAggregateOutputType | null;
    _max: MoviesMaxAggregateOutputType | null;
  };

  export type MoviesAvgAggregateOutputType = {
    tmdb_id: number | null;
    score: number | null;
    tmdb_genresIds: number | null;
  };

  export type MoviesSumAggregateOutputType = {
    tmdb_id: number | null;
    score: number | null;
    tmdb_genresIds: number[];
  };

  export type MoviesMinAggregateOutputType = {
    id: string | null;
    tmdb_id: number | null;
    name: string | null;
    poster_image: string | null;
    score: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
    type: string | null;
  };

  export type MoviesMaxAggregateOutputType = {
    id: string | null;
    tmdb_id: number | null;
    name: string | null;
    poster_image: string | null;
    score: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
    type: string | null;
  };

  export type MoviesCountAggregateOutputType = {
    id: number;
    tmdb_id: number;
    name: number;
    poster_image: number;
    score: number;
    createdAt: number;
    updatedAt: number;
    genresIds: number;
    tmdb_genresIds: number;
    userId: number;
    type: number;
    _all: number;
  };

  export type MoviesAvgAggregateInputType = {
    tmdb_id?: true;
    score?: true;
    tmdb_genresIds?: true;
  };

  export type MoviesSumAggregateInputType = {
    tmdb_id?: true;
    score?: true;
    tmdb_genresIds?: true;
  };

  export type MoviesMinAggregateInputType = {
    id?: true;
    tmdb_id?: true;
    name?: true;
    poster_image?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    type?: true;
  };

  export type MoviesMaxAggregateInputType = {
    id?: true;
    tmdb_id?: true;
    name?: true;
    poster_image?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    type?: true;
  };

  export type MoviesCountAggregateInputType = {
    id?: true;
    tmdb_id?: true;
    name?: true;
    poster_image?: true;
    score?: true;
    createdAt?: true;
    updatedAt?: true;
    genresIds?: true;
    tmdb_genresIds?: true;
    userId?: true;
    type?: true;
    _all?: true;
  };

  export type MoviesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Movies
     **/
    _count?: true | MoviesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MoviesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MoviesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MoviesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MoviesMaxAggregateInputType;
  };

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
    [P in keyof T & keyof AggregateMovies]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>;
  };

  export type MoviesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MoviesWhereInput;
    orderBy?:
      | MoviesOrderByWithAggregationInput
      | MoviesOrderByWithAggregationInput[];
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum;
    having?: MoviesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoviesCountAggregateInputType | true;
    _avg?: MoviesAvgAggregateInputType;
    _sum?: MoviesSumAggregateInputType;
    _min?: MoviesMinAggregateInputType;
    _max?: MoviesMaxAggregateInputType;
  };

  export type MoviesGroupByOutputType = {
    id: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    genresIds: string[];
    tmdb_genresIds: number[];
    userId: string;
    type: string;
    _count: MoviesCountAggregateOutputType | null;
    _avg: MoviesAvgAggregateOutputType | null;
    _sum: MoviesSumAggregateOutputType | null;
    _min: MoviesMinAggregateOutputType | null;
    _max: MoviesMaxAggregateOutputType | null;
  };

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MoviesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof MoviesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>;
        }
      >
    >;

  export type MoviesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tmdb_id?: boolean;
      name?: boolean;
      poster_image?: boolean;
      score?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      genresIds?: boolean;
      tmdb_genresIds?: boolean;
      userId?: boolean;
      type?: boolean;
      genres?: boolean | Movies$genresArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["movies"]
  >;

  export type MoviesSelectScalar = {
    id?: boolean;
    tmdb_id?: boolean;
    name?: boolean;
    poster_image?: boolean;
    score?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    genresIds?: boolean;
    tmdb_genresIds?: boolean;
    userId?: boolean;
    type?: boolean;
  };

  export type MoviesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    genres?: boolean | Movies$genresArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $MoviesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Movies";
    objects: {
      genres: Prisma.$GenresPayload<ExtArgs>[];
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tmdb_id: number;
        name: string;
        poster_image: string;
        score: number;
        createdAt: Date;
        updatedAt: Date;
        genresIds: string[];
        tmdb_genresIds: number[];
        userId: string;
        type: string;
      },
      ExtArgs["result"]["movies"]
    >;
    composites: {};
  };

  type MoviesGetPayload<
    S extends boolean | null | undefined | MoviesDefaultArgs,
  > = $Result.GetResult<Prisma.$MoviesPayload, S>;

  type MoviesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MoviesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: MoviesCountAggregateInputType | true;
  };

  export interface MoviesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Movies"];
      meta: { name: "Movies" };
    };
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends MoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Movies that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends MoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends MoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     *
     **/
    create<T extends MoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Movies.
     *     @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movies = await prisma.movies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends MoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     *
     **/
    delete<T extends MoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends MoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends MoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends MoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     **/
    upsert<T extends MoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>,
    ): Prisma__MoviesClient<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MoviesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movies = await prisma.movies.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: MoviesFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Movies.
     * @param {MoviesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movies = await prisma.movies.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: MoviesAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], MoviesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MoviesAggregateArgs>(
      args: Subset<T, MoviesAggregateArgs>,
    ): Prisma.PrismaPromise<GetMoviesAggregateType<T>>;

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs["orderBy"] }
        : { orderBy?: MoviesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMoviesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Movies model
     */
    readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    genres<T extends Movies$genresArgs<ExtArgs> = {}>(
      args?: Subset<T, Movies$genresArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany"> | Null
    >;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Movies model
   */
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", "String">;
    readonly tmdb_id: FieldRef<"Movies", "Int">;
    readonly name: FieldRef<"Movies", "String">;
    readonly poster_image: FieldRef<"Movies", "String">;
    readonly score: FieldRef<"Movies", "Float">;
    readonly createdAt: FieldRef<"Movies", "DateTime">;
    readonly updatedAt: FieldRef<"Movies", "DateTime">;
    readonly genresIds: FieldRef<"Movies", "String[]">;
    readonly tmdb_genresIds: FieldRef<"Movies", "Int[]">;
    readonly userId: FieldRef<"Movies", "String">;
    readonly type: FieldRef<"Movies", "String">;
  }

  // Custom InputTypes

  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput;
  };

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput;
  };

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[];
  };

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[];
  };

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[];
  };

  /**
   * Movies create
   */
  export type MoviesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>;
  };

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[];
  };

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>;
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput;
  };

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>;
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput;
  };

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput;
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>;
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>;
  };

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput;
  };

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput;
  };

  /**
   * Movies findRaw
   */
  export type MoviesFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Movies aggregateRaw
   */
  export type MoviesAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Movies.genres
   */
  export type Movies$genresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    where?: GenresWhereInput;
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[];
    cursor?: GenresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[];
  };

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
  };

  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null;
    _avg: GenresAvgAggregateOutputType | null;
    _sum: GenresSumAggregateOutputType | null;
    _min: GenresMinAggregateOutputType | null;
    _max: GenresMaxAggregateOutputType | null;
  };

  export type GenresAvgAggregateOutputType = {
    tmdb_id: number | null;
  };

  export type GenresSumAggregateOutputType = {
    tmdb_id: number | null;
  };

  export type GenresMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    tmdb_id: number | null;
  };

  export type GenresMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    tmdb_id: number | null;
  };

  export type GenresCountAggregateOutputType = {
    id: number;
    name: number;
    tmdb_id: number;
    moviesIds: number;
    _all: number;
  };

  export type GenresAvgAggregateInputType = {
    tmdb_id?: true;
  };

  export type GenresSumAggregateInputType = {
    tmdb_id?: true;
  };

  export type GenresMinAggregateInputType = {
    id?: true;
    name?: true;
    tmdb_id?: true;
  };

  export type GenresMaxAggregateInputType = {
    id?: true;
    name?: true;
    tmdb_id?: true;
  };

  export type GenresCountAggregateInputType = {
    id?: true;
    name?: true;
    tmdb_id?: true;
    moviesIds?: true;
    _all?: true;
  };

  export type GenresAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Genres
     **/
    _count?: true | GenresCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GenresAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GenresSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GenresMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GenresMaxAggregateInputType;
  };

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
    [P in keyof T & keyof AggregateGenres]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>;
  };

  export type GenresGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GenresWhereInput;
    orderBy?:
      | GenresOrderByWithAggregationInput
      | GenresOrderByWithAggregationInput[];
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum;
    having?: GenresScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GenresCountAggregateInputType | true;
    _avg?: GenresAvgAggregateInputType;
    _sum?: GenresSumAggregateInputType;
    _min?: GenresMinAggregateInputType;
    _max?: GenresMaxAggregateInputType;
  };

  export type GenresGroupByOutputType = {
    id: string;
    name: string;
    tmdb_id: number;
    moviesIds: string[];
    _count: GenresCountAggregateOutputType | null;
    _avg: GenresAvgAggregateOutputType | null;
    _sum: GenresSumAggregateOutputType | null;
    _min: GenresMinAggregateOutputType | null;
    _max: GenresMaxAggregateOutputType | null;
  };

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GenresGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof GenresGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>;
        }
      >
    >;

  export type GenresSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      tmdb_id?: boolean;
      moviesIds?: boolean;
      movies?: boolean | Genres$moviesArgs<ExtArgs>;
      _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["genres"]
  >;

  export type GenresSelectScalar = {
    id?: boolean;
    name?: boolean;
    tmdb_id?: boolean;
    moviesIds?: boolean;
  };

  export type GenresInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    movies?: boolean | Genres$moviesArgs<ExtArgs>;
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $GenresPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Genres";
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        tmdb_id: number;
        moviesIds: string[];
      },
      ExtArgs["result"]["genres"]
    >;
    composites: {};
  };

  type GenresGetPayload<
    S extends boolean | null | undefined | GenresDefaultArgs,
  > = $Result.GetResult<Prisma.$GenresPayload, S>;

  type GenresCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<GenresFindManyArgs, "select" | "include" | "distinct"> & {
    select?: GenresCountAggregateInputType | true;
  };

  export interface GenresDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Genres"];
      meta: { name: "Genres" };
    };
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends GenresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Genres that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends GenresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     *
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends GenresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     *
     **/
    create<T extends GenresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresCreateArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Genres.
     *     @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genres = await prisma.genres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends GenresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     *
     **/
    delete<T extends GenresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends GenresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends GenresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends GenresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     **/
    upsert<T extends GenresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>,
    ): Prisma__GenresClient<
      $Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genres = await prisma.genres.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: GenresFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Genres.
     * @param {GenresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genres = await prisma.genres.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: GenresAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
     **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GenresCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GenresAggregateArgs>(
      args: Subset<T, GenresAggregateArgs>,
    ): Prisma.PrismaPromise<GetGenresAggregateType<T>>;

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs["orderBy"] }
        : { orderBy?: GenresGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetGenresGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Genres model
     */
    readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    movies<T extends Genres$moviesArgs<ExtArgs> = {}>(
      args?: Subset<T, Genres$moviesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Genres model
   */
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", "String">;
    readonly name: FieldRef<"Genres", "String">;
    readonly tmdb_id: FieldRef<"Genres", "Int">;
    readonly moviesIds: FieldRef<"Genres", "String[]">;
  }

  // Custom InputTypes

  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput;
  };

  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput;
  };

  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[];
  };

  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Genres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[];
  };

  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Genres.
     */
    skip?: number;
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[];
  };

  /**
   * Genres create
   */
  export type GenresCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>;
  };

  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[];
  };

  /**
   * Genres update
   */
  export type GenresUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>;
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput;
  };

  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>;
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput;
  };

  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput;
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>;
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>;
  };

  /**
   * Genres delete
   */
  export type GenresDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput;
  };

  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput;
  };

  /**
   * Genres findRaw
   */
  export type GenresFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Genres aggregateRaw
   */
  export type GenresAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Genres.movies
   */
  export type Genres$moviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null;
    where?: MoviesWhereInput;
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[];
    cursor?: MoviesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[];
  };

  /**
   * Genres without action
   */
  export type GenresDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: "id";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    email: "email";
    name: "name";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const MoviesScalarFieldEnum: {
    id: "id";
    tmdb_id: "tmdb_id";
    name: "name";
    poster_image: "poster_image";
    score: "score";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    genresIds: "genresIds";
    tmdb_genresIds: "tmdb_genresIds";
    userId: "userId";
    type: "type";
  };

  export type MoviesScalarFieldEnum =
    (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum];

  export const GenresScalarFieldEnum: {
    id: "id";
    name: "name";
    tmdb_id: "tmdb_id";
    moviesIds: "moviesIds";
  };

  export type GenresScalarFieldEnum =
    (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    email?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    movies?: MoviesListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    movies?: MoviesOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      name?: StringFilter<"User"> | string;
      movies?: MoviesListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
  };

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[];
    OR?: MoviesWhereInput[];
    NOT?: MoviesWhereInput | MoviesWhereInput[];
    id?: StringFilter<"Movies"> | string;
    tmdb_id?: IntFilter<"Movies"> | number;
    name?: StringFilter<"Movies"> | string;
    poster_image?: StringFilter<"Movies"> | string;
    score?: FloatFilter<"Movies"> | number;
    createdAt?: DateTimeFilter<"Movies"> | Date | string;
    updatedAt?: DateTimeFilter<"Movies"> | Date | string;
    genresIds?: StringNullableListFilter<"Movies">;
    tmdb_genresIds?: IntNullableListFilter<"Movies">;
    userId?: StringFilter<"Movies"> | string;
    type?: StringFilter<"Movies"> | string;
    genres?: GenresListRelationFilter;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder;
    tmdb_id?: SortOrder;
    name?: SortOrder;
    poster_image?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    genresIds?: SortOrder;
    tmdb_genresIds?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    genres?: GenresOrderByRelationAggregateInput;
    user?: UserOrderByWithRelationInput;
  };

  export type MoviesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: MoviesWhereInput | MoviesWhereInput[];
      OR?: MoviesWhereInput[];
      NOT?: MoviesWhereInput | MoviesWhereInput[];
      tmdb_id?: IntFilter<"Movies"> | number;
      poster_image?: StringFilter<"Movies"> | string;
      score?: FloatFilter<"Movies"> | number;
      createdAt?: DateTimeFilter<"Movies"> | Date | string;
      updatedAt?: DateTimeFilter<"Movies"> | Date | string;
      genresIds?: StringNullableListFilter<"Movies">;
      tmdb_genresIds?: IntNullableListFilter<"Movies">;
      userId?: StringFilter<"Movies"> | string;
      type?: StringFilter<"Movies"> | string;
      genres?: GenresListRelationFilter;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id" | "name"
  >;

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder;
    tmdb_id?: SortOrder;
    name?: SortOrder;
    poster_image?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    genresIds?: SortOrder;
    tmdb_genresIds?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    _count?: MoviesCountOrderByAggregateInput;
    _avg?: MoviesAvgOrderByAggregateInput;
    _max?: MoviesMaxOrderByAggregateInput;
    _min?: MoviesMinOrderByAggregateInput;
    _sum?: MoviesSumOrderByAggregateInput;
  };

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?:
      | MoviesScalarWhereWithAggregatesInput
      | MoviesScalarWhereWithAggregatesInput[];
    OR?: MoviesScalarWhereWithAggregatesInput[];
    NOT?:
      | MoviesScalarWhereWithAggregatesInput
      | MoviesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Movies"> | string;
    tmdb_id?: IntWithAggregatesFilter<"Movies"> | number;
    name?: StringWithAggregatesFilter<"Movies"> | string;
    poster_image?: StringWithAggregatesFilter<"Movies"> | string;
    score?: FloatWithAggregatesFilter<"Movies"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Movies"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Movies"> | Date | string;
    genresIds?: StringNullableListFilter<"Movies">;
    tmdb_genresIds?: IntNullableListFilter<"Movies">;
    userId?: StringWithAggregatesFilter<"Movies"> | string;
    type?: StringWithAggregatesFilter<"Movies"> | string;
  };

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[];
    OR?: GenresWhereInput[];
    NOT?: GenresWhereInput | GenresWhereInput[];
    id?: StringFilter<"Genres"> | string;
    name?: StringFilter<"Genres"> | string;
    tmdb_id?: IntFilter<"Genres"> | number;
    moviesIds?: StringNullableListFilter<"Genres">;
    movies?: MoviesListRelationFilter;
  };

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    tmdb_id?: SortOrder;
    moviesIds?: SortOrder;
    movies?: MoviesOrderByRelationAggregateInput;
  };

  export type GenresWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: GenresWhereInput | GenresWhereInput[];
      OR?: GenresWhereInput[];
      NOT?: GenresWhereInput | GenresWhereInput[];
      name?: StringFilter<"Genres"> | string;
      tmdb_id?: IntFilter<"Genres"> | number;
      moviesIds?: StringNullableListFilter<"Genres">;
      movies?: MoviesListRelationFilter;
    },
    "id"
  >;

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    tmdb_id?: SortOrder;
    moviesIds?: SortOrder;
    _count?: GenresCountOrderByAggregateInput;
    _avg?: GenresAvgOrderByAggregateInput;
    _max?: GenresMaxOrderByAggregateInput;
    _min?: GenresMinOrderByAggregateInput;
    _sum?: GenresSumOrderByAggregateInput;
  };

  export type GenresScalarWhereWithAggregatesInput = {
    AND?:
      | GenresScalarWhereWithAggregatesInput
      | GenresScalarWhereWithAggregatesInput[];
    OR?: GenresScalarWhereWithAggregatesInput[];
    NOT?:
      | GenresScalarWhereWithAggregatesInput
      | GenresScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Genres"> | string;
    name?: StringWithAggregatesFilter<"Genres"> | string;
    tmdb_id?: IntWithAggregatesFilter<"Genres"> | number;
    moviesIds?: StringNullableListFilter<"Genres">;
  };

  export type UserCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name: string;
    movies?: MoviesCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name: string;
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    movies?: MoviesUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name: string;
  };

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type MoviesCreateInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    type: string;
    genres?: GenresCreateNestedManyWithoutMoviesInput;
    user: UserCreateNestedOneWithoutMoviesInput;
  };

  export type MoviesUncheckedCreateInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    genresIds?: MoviesCreategenresIdsInput | string[];
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    userId: string;
    type: string;
    genres?: GenresUncheckedCreateNestedManyWithoutMoviesInput;
  };

  export type MoviesUpdateInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
    genres?: GenresUpdateManyWithoutMoviesNestedInput;
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput;
  };

  export type MoviesUncheckedUpdateInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    genres?: GenresUncheckedUpdateManyWithoutMoviesNestedInput;
  };

  export type MoviesCreateManyInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    genresIds?: MoviesCreategenresIdsInput | string[];
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    userId: string;
    type: string;
  };

  export type MoviesUpdateManyMutationInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type MoviesUncheckedUpdateManyInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type GenresCreateInput = {
    id?: string;
    name: string;
    tmdb_id: number;
    movies?: MoviesCreateNestedManyWithoutGenresInput;
  };

  export type GenresUncheckedCreateInput = {
    id?: string;
    name: string;
    tmdb_id: number;
    moviesIds?: GenresCreatemoviesIdsInput | string[];
    movies?: MoviesUncheckedCreateNestedManyWithoutGenresInput;
  };

  export type GenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    movies?: MoviesUpdateManyWithoutGenresNestedInput;
  };

  export type GenresUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    moviesIds?: GenresUpdatemoviesIdsInput | string[];
    movies?: MoviesUncheckedUpdateManyWithoutGenresNestedInput;
  };

  export type GenresCreateManyInput = {
    id?: string;
    name: string;
    tmdb_id: number;
    moviesIds?: GenresCreatemoviesIdsInput | string[];
  };

  export type GenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
  };

  export type GenresUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    moviesIds?: GenresUpdatemoviesIdsInput | string[];
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput;
    some?: MoviesWhereInput;
    none?: MoviesWhereInput;
  };

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type GenresListRelationFilter = {
    every?: GenresWhereInput;
    some?: GenresWhereInput;
    none?: GenresWhereInput;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder;
    tmdb_id?: SortOrder;
    name?: SortOrder;
    poster_image?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    genresIds?: SortOrder;
    tmdb_genresIds?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
  };

  export type MoviesAvgOrderByAggregateInput = {
    tmdb_id?: SortOrder;
    score?: SortOrder;
    tmdb_genresIds?: SortOrder;
  };

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder;
    tmdb_id?: SortOrder;
    name?: SortOrder;
    poster_image?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
  };

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder;
    tmdb_id?: SortOrder;
    name?: SortOrder;
    poster_image?: SortOrder;
    score?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
  };

  export type MoviesSumOrderByAggregateInput = {
    tmdb_id?: SortOrder;
    score?: SortOrder;
    tmdb_genresIds?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    tmdb_id?: SortOrder;
    moviesIds?: SortOrder;
  };

  export type GenresAvgOrderByAggregateInput = {
    tmdb_id?: SortOrder;
  };

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    tmdb_id?: SortOrder;
  };

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    tmdb_id?: SortOrder;
  };

  export type GenresSumOrderByAggregateInput = {
    tmdb_id?: SortOrder;
  };

  export type MoviesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
      | MoviesCreateWithoutUserInput[]
      | MoviesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutUserInput
      | MoviesCreateOrConnectWithoutUserInput[];
    createMany?: MoviesCreateManyUserInputEnvelope;
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
  };

  export type MoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
      | MoviesCreateWithoutUserInput[]
      | MoviesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutUserInput
      | MoviesCreateOrConnectWithoutUserInput[];
    createMany?: MoviesCreateManyUserInputEnvelope;
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type MoviesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
      | MoviesCreateWithoutUserInput[]
      | MoviesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutUserInput
      | MoviesCreateOrConnectWithoutUserInput[];
    upsert?:
      | MoviesUpsertWithWhereUniqueWithoutUserInput
      | MoviesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MoviesCreateManyUserInputEnvelope;
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    update?:
      | MoviesUpdateWithWhereUniqueWithoutUserInput
      | MoviesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MoviesUpdateManyWithWhereWithoutUserInput
      | MoviesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
  };

  export type MoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
      | MoviesCreateWithoutUserInput[]
      | MoviesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutUserInput
      | MoviesCreateOrConnectWithoutUserInput[];
    upsert?:
      | MoviesUpsertWithWhereUniqueWithoutUserInput
      | MoviesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: MoviesCreateManyUserInputEnvelope;
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    update?:
      | MoviesUpdateWithWhereUniqueWithoutUserInput
      | MoviesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | MoviesUpdateManyWithWhereWithoutUserInput
      | MoviesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
  };

  export type MoviesCreatetmdb_genresIdsInput = {
    set: number[];
  };

  export type GenresCreateNestedManyWithoutMoviesInput = {
    create?:
      | XOR<
          GenresCreateWithoutMoviesInput,
          GenresUncheckedCreateWithoutMoviesInput
        >
      | GenresCreateWithoutMoviesInput[]
      | GenresUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | GenresCreateOrConnectWithoutMoviesInput
      | GenresCreateOrConnectWithoutMoviesInput[];
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<
      UserCreateWithoutMoviesInput,
      UserUncheckedCreateWithoutMoviesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput;
    connect?: UserWhereUniqueInput;
  };

  export type MoviesCreategenresIdsInput = {
    set: string[];
  };

  export type GenresUncheckedCreateNestedManyWithoutMoviesInput = {
    create?:
      | XOR<
          GenresCreateWithoutMoviesInput,
          GenresUncheckedCreateWithoutMoviesInput
        >
      | GenresCreateWithoutMoviesInput[]
      | GenresUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | GenresCreateOrConnectWithoutMoviesInput
      | GenresCreateOrConnectWithoutMoviesInput[];
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type MoviesUpdatetmdb_genresIdsInput = {
    set?: number[];
    push?: number | number[];
  };

  export type GenresUpdateManyWithoutMoviesNestedInput = {
    create?:
      | XOR<
          GenresCreateWithoutMoviesInput,
          GenresUncheckedCreateWithoutMoviesInput
        >
      | GenresCreateWithoutMoviesInput[]
      | GenresUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | GenresCreateOrConnectWithoutMoviesInput
      | GenresCreateOrConnectWithoutMoviesInput[];
    upsert?:
      | GenresUpsertWithWhereUniqueWithoutMoviesInput
      | GenresUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    update?:
      | GenresUpdateWithWhereUniqueWithoutMoviesInput
      | GenresUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?:
      | GenresUpdateManyWithWhereWithoutMoviesInput
      | GenresUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<
      UserCreateWithoutMoviesInput,
      UserUncheckedCreateWithoutMoviesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput;
    upsert?: UserUpsertWithoutMoviesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMoviesInput,
        UserUpdateWithoutMoviesInput
      >,
      UserUncheckedUpdateWithoutMoviesInput
    >;
  };

  export type MoviesUpdategenresIdsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type GenresUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?:
      | XOR<
          GenresCreateWithoutMoviesInput,
          GenresUncheckedCreateWithoutMoviesInput
        >
      | GenresCreateWithoutMoviesInput[]
      | GenresUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?:
      | GenresCreateOrConnectWithoutMoviesInput
      | GenresCreateOrConnectWithoutMoviesInput[];
    upsert?:
      | GenresUpsertWithWhereUniqueWithoutMoviesInput
      | GenresUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[];
    update?:
      | GenresUpdateWithWhereUniqueWithoutMoviesInput
      | GenresUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?:
      | GenresUpdateManyWithWhereWithoutMoviesInput
      | GenresUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[];
  };

  export type MoviesCreateNestedManyWithoutGenresInput = {
    create?:
      | XOR<
          MoviesCreateWithoutGenresInput,
          MoviesUncheckedCreateWithoutGenresInput
        >
      | MoviesCreateWithoutGenresInput[]
      | MoviesUncheckedCreateWithoutGenresInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutGenresInput
      | MoviesCreateOrConnectWithoutGenresInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
  };

  export type GenresCreatemoviesIdsInput = {
    set: string[];
  };

  export type MoviesUncheckedCreateNestedManyWithoutGenresInput = {
    create?:
      | XOR<
          MoviesCreateWithoutGenresInput,
          MoviesUncheckedCreateWithoutGenresInput
        >
      | MoviesCreateWithoutGenresInput[]
      | MoviesUncheckedCreateWithoutGenresInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutGenresInput
      | MoviesCreateOrConnectWithoutGenresInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
  };

  export type MoviesUpdateManyWithoutGenresNestedInput = {
    create?:
      | XOR<
          MoviesCreateWithoutGenresInput,
          MoviesUncheckedCreateWithoutGenresInput
        >
      | MoviesCreateWithoutGenresInput[]
      | MoviesUncheckedCreateWithoutGenresInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutGenresInput
      | MoviesCreateOrConnectWithoutGenresInput[];
    upsert?:
      | MoviesUpsertWithWhereUniqueWithoutGenresInput
      | MoviesUpsertWithWhereUniqueWithoutGenresInput[];
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    update?:
      | MoviesUpdateWithWhereUniqueWithoutGenresInput
      | MoviesUpdateWithWhereUniqueWithoutGenresInput[];
    updateMany?:
      | MoviesUpdateManyWithWhereWithoutGenresInput
      | MoviesUpdateManyWithWhereWithoutGenresInput[];
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
  };

  export type GenresUpdatemoviesIdsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type MoviesUncheckedUpdateManyWithoutGenresNestedInput = {
    create?:
      | XOR<
          MoviesCreateWithoutGenresInput,
          MoviesUncheckedCreateWithoutGenresInput
        >
      | MoviesCreateWithoutGenresInput[]
      | MoviesUncheckedCreateWithoutGenresInput[];
    connectOrCreate?:
      | MoviesCreateOrConnectWithoutGenresInput
      | MoviesCreateOrConnectWithoutGenresInput[];
    upsert?:
      | MoviesUpsertWithWhereUniqueWithoutGenresInput
      | MoviesUpsertWithWhereUniqueWithoutGenresInput[];
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[];
    update?:
      | MoviesUpdateWithWhereUniqueWithoutGenresInput
      | MoviesUpdateWithWhereUniqueWithoutGenresInput[];
    updateMany?:
      | MoviesUpdateManyWithWhereWithoutGenresInput
      | MoviesUpdateManyWithWhereWithoutGenresInput[];
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type MoviesCreateWithoutUserInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    type: string;
    genres?: GenresCreateNestedManyWithoutMoviesInput;
  };

  export type MoviesUncheckedCreateWithoutUserInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    genresIds?: MoviesCreategenresIdsInput | string[];
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    type: string;
    genres?: GenresUncheckedCreateNestedManyWithoutMoviesInput;
  };

  export type MoviesCreateOrConnectWithoutUserInput = {
    where: MoviesWhereUniqueInput;
    create: XOR<
      MoviesCreateWithoutUserInput,
      MoviesUncheckedCreateWithoutUserInput
    >;
  };

  export type MoviesCreateManyUserInputEnvelope = {
    data: MoviesCreateManyUserInput | MoviesCreateManyUserInput[];
  };

  export type MoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput;
    update: XOR<
      MoviesUpdateWithoutUserInput,
      MoviesUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      MoviesCreateWithoutUserInput,
      MoviesUncheckedCreateWithoutUserInput
    >;
  };

  export type MoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput;
    data: XOR<
      MoviesUpdateWithoutUserInput,
      MoviesUncheckedUpdateWithoutUserInput
    >;
  };

  export type MoviesUpdateManyWithWhereWithoutUserInput = {
    where: MoviesScalarWhereInput;
    data: XOR<
      MoviesUpdateManyMutationInput,
      MoviesUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
    OR?: MoviesScalarWhereInput[];
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[];
    id?: StringFilter<"Movies"> | string;
    tmdb_id?: IntFilter<"Movies"> | number;
    name?: StringFilter<"Movies"> | string;
    poster_image?: StringFilter<"Movies"> | string;
    score?: FloatFilter<"Movies"> | number;
    createdAt?: DateTimeFilter<"Movies"> | Date | string;
    updatedAt?: DateTimeFilter<"Movies"> | Date | string;
    genresIds?: StringNullableListFilter<"Movies">;
    tmdb_genresIds?: IntNullableListFilter<"Movies">;
    userId?: StringFilter<"Movies"> | string;
    type?: StringFilter<"Movies"> | string;
  };

  export type GenresCreateWithoutMoviesInput = {
    id?: string;
    name: string;
    tmdb_id: number;
  };

  export type GenresUncheckedCreateWithoutMoviesInput = {
    id?: string;
    name: string;
    tmdb_id: number;
    moviesIds?: GenresCreatemoviesIdsInput | string[];
  };

  export type GenresCreateOrConnectWithoutMoviesInput = {
    where: GenresWhereUniqueInput;
    create: XOR<
      GenresCreateWithoutMoviesInput,
      GenresUncheckedCreateWithoutMoviesInput
    >;
  };

  export type UserCreateWithoutMoviesInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name: string;
  };

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    name: string;
  };

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMoviesInput,
      UserUncheckedCreateWithoutMoviesInput
    >;
  };

  export type GenresUpsertWithWhereUniqueWithoutMoviesInput = {
    where: GenresWhereUniqueInput;
    update: XOR<
      GenresUpdateWithoutMoviesInput,
      GenresUncheckedUpdateWithoutMoviesInput
    >;
    create: XOR<
      GenresCreateWithoutMoviesInput,
      GenresUncheckedCreateWithoutMoviesInput
    >;
  };

  export type GenresUpdateWithWhereUniqueWithoutMoviesInput = {
    where: GenresWhereUniqueInput;
    data: XOR<
      GenresUpdateWithoutMoviesInput,
      GenresUncheckedUpdateWithoutMoviesInput
    >;
  };

  export type GenresUpdateManyWithWhereWithoutMoviesInput = {
    where: GenresScalarWhereInput;
    data: XOR<
      GenresUpdateManyMutationInput,
      GenresUncheckedUpdateManyWithoutMoviesInput
    >;
  };

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[];
    OR?: GenresScalarWhereInput[];
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[];
    id?: StringFilter<"Genres"> | string;
    name?: StringFilter<"Genres"> | string;
    tmdb_id?: IntFilter<"Genres"> | number;
    moviesIds?: StringNullableListFilter<"Genres">;
  };

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<
      UserUpdateWithoutMoviesInput,
      UserUncheckedUpdateWithoutMoviesInput
    >;
    create: XOR<
      UserCreateWithoutMoviesInput,
      UserUncheckedCreateWithoutMoviesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMoviesInput,
      UserUncheckedUpdateWithoutMoviesInput
    >;
  };

  export type UserUpdateWithoutMoviesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateWithoutMoviesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type MoviesCreateWithoutGenresInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    type: string;
    user: UserCreateNestedOneWithoutMoviesInput;
  };

  export type MoviesUncheckedCreateWithoutGenresInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    genresIds?: MoviesCreategenresIdsInput | string[];
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    userId: string;
    type: string;
  };

  export type MoviesCreateOrConnectWithoutGenresInput = {
    where: MoviesWhereUniqueInput;
    create: XOR<
      MoviesCreateWithoutGenresInput,
      MoviesUncheckedCreateWithoutGenresInput
    >;
  };

  export type MoviesUpsertWithWhereUniqueWithoutGenresInput = {
    where: MoviesWhereUniqueInput;
    update: XOR<
      MoviesUpdateWithoutGenresInput,
      MoviesUncheckedUpdateWithoutGenresInput
    >;
    create: XOR<
      MoviesCreateWithoutGenresInput,
      MoviesUncheckedCreateWithoutGenresInput
    >;
  };

  export type MoviesUpdateWithWhereUniqueWithoutGenresInput = {
    where: MoviesWhereUniqueInput;
    data: XOR<
      MoviesUpdateWithoutGenresInput,
      MoviesUncheckedUpdateWithoutGenresInput
    >;
  };

  export type MoviesUpdateManyWithWhereWithoutGenresInput = {
    where: MoviesScalarWhereInput;
    data: XOR<
      MoviesUpdateManyMutationInput,
      MoviesUncheckedUpdateManyWithoutGenresInput
    >;
  };

  export type MoviesCreateManyUserInput = {
    id?: string;
    tmdb_id: number;
    name: string;
    poster_image: string;
    score: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    genresIds?: MoviesCreategenresIdsInput | string[];
    tmdb_genresIds?: MoviesCreatetmdb_genresIdsInput | number[];
    type: string;
  };

  export type MoviesUpdateWithoutUserInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
    genres?: GenresUpdateManyWithoutMoviesNestedInput;
  };

  export type MoviesUncheckedUpdateWithoutUserInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
    genres?: GenresUncheckedUpdateManyWithoutMoviesNestedInput;
  };

  export type MoviesUncheckedUpdateManyWithoutUserInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type GenresUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
  };

  export type GenresUncheckedUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    moviesIds?: GenresUpdatemoviesIdsInput | string[];
  };

  export type GenresUncheckedUpdateManyWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    moviesIds?: GenresUpdatemoviesIdsInput | string[];
  };

  export type MoviesUpdateWithoutGenresInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    type?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput;
  };

  export type MoviesUncheckedUpdateWithoutGenresInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type MoviesUncheckedUpdateManyWithoutGenresInput = {
    tmdb_id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    poster_image?: StringFieldUpdateOperationsInput | string;
    score?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    genresIds?: MoviesUpdategenresIdsInput | string[];
    tmdb_genresIds?: MoviesUpdatetmdb_genresIdsInput | number[];
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MoviesCountOutputTypeDefaultArgs instead
   */
  export type MoviesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MoviesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use GenresCountOutputTypeDefaultArgs instead
   */
  export type GenresCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = GenresCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MoviesDefaultArgs instead
   */
  export type MoviesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MoviesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use GenresDefaultArgs instead
   */
  export type GenresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = GenresDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
