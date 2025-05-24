using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{

    // Define DbSets for your entities here, e.g.:
    public DbSet<AppUser> Users { get; set; }

}
