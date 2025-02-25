{-# LANGUAGE UndecidableInstances #-}
{-# OPTIONS_GHC -Wno-orphans #-}

-- This module houses type class instances on the MSSQL backend that relate
-- to the Schema Cache.
module Hasura.Backends.MSSQL.Instances.SchemaCache () where

import Hasura.RQL.Types.Backend
import Hasura.RQL.Types.SchemaCacheTypes (GetAggregationPredicatesDeps)
import Hasura.SQL.Backend (BackendType (MSSQL))

instance (Backend 'MSSQL) => GetAggregationPredicatesDeps 'MSSQL
