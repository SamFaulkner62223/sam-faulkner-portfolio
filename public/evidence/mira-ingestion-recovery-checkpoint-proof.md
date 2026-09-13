# MIRA Ingestion Recovery Proof

## Test
- **File:** `tests/test_provenance_ingestion.py`
- **Test name:** `test_recover_interrupted_ingestion_job_with_checkpointed_helper_switch_and_handoff`

## Command run
```text
pytest tests/test_provenance_ingestion.py -k "recover_interrupted_ingestion_job_with_checkpointed_helper_switch_and_handoff" -q
```

## Result
- **Status:** passed
- **Output:** `1 passed, 3 deselected`

## What it validates
- Interrupted ingestion run can be resumed from checkpoint state.
- Human approval gate is enforced for the handoff and satisfied.
- Helper/actor context can continue from checkpoint evidence.
- Duplicate events on replay do not add duplicate semantic rows.
- Handoff result is recorded and traceable.
