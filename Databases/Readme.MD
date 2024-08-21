## What truly happens inside a database?

Many dbs nowadays are open source so we can go through their source code on Github. Through this we can understand the underlying concepts in DBs including B Trees,B+ Trees and LSM Trees.

### Network Layer
Clients is any device, application, or user that interacts with the database server to request and retrieve data. It runs on local machines and requests the CRUD (create, read, update, delete) operations.
Servers that maybe remotely located on the network will be dedicated for the database. But SQLite is embeddable database that can run locally and doesn't need a server. 
Network layer is used to communicate between the client and the server.

### Front End
Once a query comes in it goes through the front end, that consists of 
1. Tokenizer: Breaks down the query into tokens
2. Parser: creates a parsed tree out of the tokens. Checks if instructions are valid and throws error if there are errors.
3. Optimizer: Finds the best way to execute a query. There can be multiple ways a query can be run. It identifies the way to minimize the use of resources such as CPU, memory, and disk I/O

### Execution Engine
1. Query execution: actual execution of a SQL query based on the execution plan provided by the optimizer. A series of operations that interact with the database storage and retrieval mechanisms.
2. Cashe manager to make queries faster. By storing frequently accessed data or query results in memory, the cache manager reduces the need for repetitive and costly disk I/O operations.
3. Utility services for authentication, backup, security etc. background functions and
tools that support the overall operation, management, and maintenance of DBMS

### Transaction Manager

Transaction is a complex process in DBs. They have multiple steps. Many DBs support asset properties. The four main properties of database transactions are atomicity, consistency, isolation, and durability (ACID).
1. Atomicity: Transactions are completed in their entirety
2. Consistency: maintaining data points in a correct state after a transaction
3. Isolation: how concurrent transactions affect each other's changes
4. Durability: Data remains permanent after a transaction is successful. If the system fails, the data will remain intact and accessible

A transaction is a sequence of one or more operations performed as a single, indivisible unit of work. The transaction manager ensures that these operations are completed successfully and reliably, or not executed at all, in the case of errors or failures.

Txn Manager has following components
1. Lock Management: To take care of concurrency. To ensure concurrency control and maintain data consistency in a multi-user environment where multiple transactions might be accessing or modifying the same data
2. Recovery Manager: Recovering the database to a consistent state after a crash or other types of failures. Includes undoing incomplete transactions, reapplying completed transactions, and restoring the database to a known good state.
3. Concurrency Manager: controls how transactions interact with each other to prevent issues such as
data anomalies, conflicts, and inconsistencies that can arise from concurrent access to the database. Multi-Version Concurrency Control is the technology used. 


### Distribution
1. Shard Manager: Divide entire data into parts (shards) to make the DB scalable. Sharding is a database partitioning technique used to distribute a large dataset across multiple servers or nodes, known as shards, to improve performance, scalability, and manageability. Each shard contains a subset of the overall data, and the shard manager coordinates the distribution and access of this data. MongoDB has built-in sharding support with config servers. SQLite doesnt support. 
2. Cluster Manager: Server nodes come together to form a cluster.  A database cluster consists of multiple interconnected database servers (nodes) working together to provide high availability, scalability, and fault tolerance. The cluster manager ensures that these nodes function cohesively as a single system. MongoDB has Atlas for cluster mgmt while SQLite doesnt support. 
3. Replication Manager: To make sure there is high availability of data across the nodes. Copying and maintaining database data across different servers to ensure data redundancy, high availability, and disaster recovery. MongoDB has Replica sets for high availability. SQLite has limited replication through third-party tools.

### Storage Engine

1. Buffer Manager: Managing the buffer pool, which is a portion of memory allocated to store frequently accessed data pages. The buffer pool acts as a cache between the database's disk storage and RAM, optimizing data access and performance by reducing the number of disk I/O operations.
2. Indexing: Indexes are data structures used to improve the speed of data retrieval operations. Indexes enable efficient searching, sorting, and querying of data by allowing DBMS to quickly locate specific rows without scanning the entire table. MongoDB and SQLite have B Tree indexes. 
3. Log Manager: Logs record changes made to the database, providing a detailed history of modifications, which is essential for ensuring data integrity, consistency, and recovery.
4. Disk Storage Manager: allocation, organization, and retrieval of data stored on disk, ensuring that the database efficiently uses disk space and maintains data integrity. Disk storage manager stores the DB. Disk is persistent and is cheaper than RAM. DIsk is divided into circular tracks and is divided into sectors. Every arc is called a File Block.
5. File System Interface: handling how the DBMS reads from and writes to the physical storage, such as disk drives or SSDs, through the operating system's file system. SQLite has single-file database that directly interacts with the file system and there is no need of disk storage manager.

