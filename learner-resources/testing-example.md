# Worked Testing Example – Hot Wheels

This is an example of **testing methodology**, not a test plan for the assessed Hot Beans Web website.

## Example issue: responsive navigation

### Requirement being tested

Users should be able to reach all five pages when using the website on a narrow mobile viewport.

### Test

| Test ID | Area | Test data / condition | Expected result | Actual result | Outcome |
|---|---|---|---|---|---|
| NAV-01 | Mobile navigation | 390px wide viewport | Navigation remains usable and all five links can be reached | Links are available but occupy too much vertical space | Needs improvement |
| NAV-02 | Menu control | Activate menu button at 390px | Navigation opens and button reports the open state | Menu opens and `aria-expanded` changes to `true` | Pass |
| NAV-03 | Keyboard use | Tab to menu button and activate it | Visible focus and menu can be opened without a mouse | Visible focus appears and menu opens | Pass |
| NAV-04 | Wider viewport | Resize above 800px | Full navigation is visible without the menu button | Full navigation is displayed | Pass |

## Interpreting the result

NAV-01 is more useful than simply writing "Fail". The website technically works, but the test identifies a usability weakness. That gives the developer evidence for a refinement.

## Retest

After changing the narrow-screen navigation layout, repeat NAV-01 using the **same condition**. Record the new actual result and compare it with the original evidence.

## Why this matters

Testing should help you make decisions. A useful record shows:

**requirement → test → evidence → issue → change → retest**

Your own tests should be based on the functionality, compatibility and usability of the website you actually designed.
