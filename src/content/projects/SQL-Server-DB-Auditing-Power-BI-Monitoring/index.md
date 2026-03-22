---
title: "Database Auditing in Microsoft SQL Server and Monitoring in Power BI"
description: "Implementing SQL Server database auditing and progressive monitoring in Power BI"
date: 2026-03-20
demoURL: ""
repoURL: "https://github.com/faithhunja/SQL-Server-Audit-and-Monitoring-in-Power-BI"
draft: True
---

## Introduction

Any organization that deals with data inevitably faces the question: "Who is accessing our data, and what are they doing with it?" This concern lies at the heart of data governance, which entails ensuring data integrity and security [[1](https://www.ibm.com/think/topics/data-governance)]. According to PwC’s 2024 Tech Strategy and AI report [[2](https://www.pwc.be/en/news-publications/2024/tech-ai.html)], 91% of CIOs and technology leaders identify data governance as their second-highest challenge for the next three to five years [[3](https://www.pwc.be/en/news-publications/2025/data-governance-challenges-cios.html)]. This is a clear sign that organizations need better ways to manage their data more securely.

When it comes to database servers, addressing these concerns requires more than just periodic log reviews. It demands a proactive, visual and auditable system. Unmonitored access can leave your databases vulnerable to breaches, which is exactly where auditing comes in.

Auditing in database servers is important because it helps enforce:

• Security: Auditing helps you quickly identify suspicious or unauthorized activity in your database server

• Compliance: It supports adherence to standards like GDPR (General Data Protection Regulation) and HIPAA (Health Insurance Portability and Accountability Act), which require safeguarding sensitive information

• Accountability: Auditing maintains a clear history of changes and access within your database server

I recently implemented an auditing solution in SQL Server, that tracks database activity across multiple users and visualized it in an interactive Power BI dashboard. In this post, I'll walk you through the setup and show you how I turned raw database logs into a clean, highly-visible dashboard.

## Prerequisites

To set up this project, you need the following:

• SQL Server 2016 or later versions

• AdventureWorks2022 as the sample database

• Power BI Desktop for log analysis and visualization

## Auditing in SQL Server

Microsoft SQL Server’s built‑in auditing feature allows you to track who did what, when, and where within your database server environment by tracking and logging events that occur in the database engine. Auditing in MS SQL Server can be done at two levels: the server level and the database level.

Server auditing involves tracking and logging events that occur across a SQL Server instance. This is done using a SQL Server audit object, which collects actions or groups of actions you want to monitor, either at the server level or the database level. The audit destination is the location that you specify to store these actions. When an audit is created, it is in a disabled state by default and needs to be enabled so that it can send data to the audit destination[[4](https://learn.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-database-engine?view=sql-server-ver17)].

### Creating a Server Audit

Key things to note:

- A Server Audit must be created in the master database
- It must exist before you can create a Server Audit Specification for it
- By default, a new Server Audit Specification is disabled upon creation

Steps to set up a Server Audit and Server Audit Specification in SQL Server:

1. Create the Server Audit
    - Give it a name
    - Specify the path on your local system where audit logs will be stored
2. Create the Server Audit Specification
    - Give it a name
    - Link it to the Server Audit
    - Specify the audit action(s) you want to track, e.g., failed login attempts
3. Enable the Server Audit
    - Once enabled, it will begin tracking the specified server-level events

The first step is defining where the audit logs will be written. We configured a server audit that outputs to a folder on the file system. This ensures logs persist even if the database is offline.

```SQL
-- Create the server audit in the master database
USE master;
GO

CREATE SERVER AUDIT [SQL_Server_Audit]
TO FILE 
(   FILEPATH = N'C:\SQLAudit\'
    ,MAXSIZE = 200 MB
    ,MAX_FILES = 10
    ,RESERVE_DISK_SPACE = OFF
)
WITH (QUEUE_DELAY = 1000, ON_FAILURE = CONTINUE);
ALTER SERVER AUDIT [SQL_Server_Audit] WITH (STATE = ON);
```

### Creating a Database Audit Specification

## References

[1] What is Data Governance? | IBM: <https://www.ibm.com/think/topics/data-governance>

[2] Tech strategy and AI report: <https://www.pwc.be/en/news-publications/2024/tech-ai.html>

[3] The five key data governance challenges for CIOs: <https://www.pwc.be/en/news-publications/2025/data-governance-challenges-cios.html>

[4] SQL Server Audit (Database Engine) - SQL Server | Microsoft Learn: <https://learn.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-database-engine?view=sql-server-ver17>

[5] CREATE SERVER AUDIT (Transact-SQL) - SQL Server | Microsoft Learn: <https://learn.microsoft.com/en-us/sql/t-sql/statements/create-server-audit-transact-sql?view=sql-server-ver17>

[6] 