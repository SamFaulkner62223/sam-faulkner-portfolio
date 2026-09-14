# Data Management — Design Evidence Record

## Purpose
Combine company, financial and time-series information into a structured analytical warehouse.

## Work documented
The master résumé source describes Python normalization, company-reference loading, annual-revenue extraction, market-data checks and CSV staging. It describes SQL Server staging tables, company/shared dimensions, fact tables, constraints and load scripts, including company-performance and financial facts.

## Source basis
Professional Portfolio Platform master résumé source, “ISYS 58303 Data Management Project.” This is a curated design and implementation summary, not an attached execution report.

## What this supports
A documented warehouse design spanning ingestion, preparation, staging and dimensional modeling.

## Outcome status
Final warehouse row counts and analysis outputs are explicitly awaiting validation in the source record. No successful full warehouse run, benchmark, reconciliation total or production deployment is asserted by this report.

## Evidence still needed
A sanitized schema diagram, a load/reconciliation report and a representative analysis output would strengthen this entry. They are not included in this version.

## Limits
Graduate project, distinct from the SQL Server Ingestion Framework pilot. Source-data publication rights and sanitization need review before additional artifacts are shared. API keys, database identifiers, raw course data and credentials are excluded.
