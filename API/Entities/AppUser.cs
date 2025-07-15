using System;

namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
    public string? ImageUrl { get; set; }

    public required byte[] PasswordHash { get; set; }

    public required byte[] PasswordSalt { get; set; }

    // Navigation properties
    public Member Member { get; set; } = null!;
}
// The AppUser class represents a user in the application.
// It contains properties for the user's ID, username, password hash, and password salt.