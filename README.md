[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_144_Distinct_Digit_Year/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_144_Distinct_Digit_Year/actions/workflows/test.yml/badge.svg) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_144_Distinct_Digit_Year) 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_Simple_Fun_144_Distinct_Digit_Year/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_144_Distinct_Digit_Year/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Simple Fun #144: Distinct Digit Year

https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

## Instructions 

 The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
Input/Output

    `[input] integer year`
```
1000 ≤ year ≤ 9000
```
    `[output] an integer`

the minimum year number that is strictly larger than the input number `year` and all its digits are distinct.

## User Stories 

### 1. Find next discint digit year
As a user
I want to find the minimum year number which is strictly larger than the given one and has only distinct digits
So that create a logic for checking distinctness

#### Scenarios 

#### 1. 
Given 2013 as starting year
When runs the logic
Then should return 2014

#### 2. 
Given 2019 as starting year
When runs the logic
Then should return 2031

#### 3. 
Given 1987 as starting year
When runs the logic
Then should return 2013

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

