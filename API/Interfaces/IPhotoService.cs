
namespace API.Interfaces;
public interface IPhotoService
    {
        Task<ImageUploadResult> AddPhotoSync(IFormFile file);
        Task<DeletionResult> DeletePhotoAsync(string publicID);
    }
