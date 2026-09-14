# SQL Server Ingestion Framework — Evidence Record

## Purpose
Turn changing tabular inputs into controlled, repeatable SQL Server loads using reviewed contracts and separate approval gates.

## Work documented
YAML contracts describe mappings, transformations, business keys and load behavior. Profiling, read-only preflight, schema planning, transactional provisioning and approved loading are separate stages. Target metadata and job history support operator review.

## Recorded outcomes
The curated pilot record reports 35 automated checks passing. Preflight accepted two pilot rows; the approved load produced two expected records. Repeating the same source preserved two target rows without duplicates. Warehouse health and job history recorded the successful run.

## What this supports
Evidence of controlled schema onboarding, reviewable loading rules and same-source repeat-load protection in a bounded pilot.

## Source basis
Professional Portfolio Platform, curated experience record EXP-001, “Deterministic SQL Server Intake Pilot”; supporting source references include the ingestion project's test-status and decision records. The public-safe Config-Driven ETL Framework case study documents the architectural pattern.

## Limits
Historical documented results, not tests rerun for this portfolio update. A two-row pilot does not establish production scale or every failure mode. MIRA checkpoint recovery is a different test and is not claimed here. Workplace identifiers, source records, credentials and operational logs are excluded.
